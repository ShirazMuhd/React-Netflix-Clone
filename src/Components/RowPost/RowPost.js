import axios from "../axios/axios";
import { imageUrl, API_KEY } from "../constants/constants";
import Youtube from "react-youtube";
import React, { useEffect, useState } from "react";
import "./RowPost.css";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    });
  });
  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("trailer not available");
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div>
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            src={`${imageUrl + obj.poster_path}`}
            alt=""
            className={props.isSmall ? "smallPoster" : "poster"}
          />
        ))}
        {urlId && <Youtube opts={opts} videoId={urlId.key} />}
      </div>
    </div>
  );
}

export default RowPost;
