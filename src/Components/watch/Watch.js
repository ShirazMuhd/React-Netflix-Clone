import React, { useEffect, useState } from "react";
import "./watch.css";
import Youtube from "react-youtube";
import { useParams } from "react-router-dom";
import axios from "../axios/axios";
import { API_KEY } from "../constants/constants";

function Watch() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [url, setUrl] = useState("");
  useEffect(() => {
    axios
      .get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data);
      });
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setUrl(response.data.results[0].key);
      });
  });

  const opts = {
    height: "1000",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="watch">
      <div className="movie-container">
        <div className="video-container">
          {url && <Youtube opts={opts} videoId={url} />}
        </div>
        <div>
          <h1>{movie && movie.title}</h1>
        </div>
        <div className="overview">
          <p>{movie && movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Watch;
