import axios from "../axios/axios";
import { imageUrl} from "../constants/constants";
import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { Link } from "react-router-dom";

function RowPost(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    });
  });

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div>
        {movies.map((obj) => (
          <Link to={`/watch/${obj.id}`}>
            <img
              src={`${imageUrl + obj.poster_path}`}
              alt=""
              className={props.isSmall ? "smallPoster" : "poster"}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RowPost;

