import React,{useEffect, useState} from 'react';
import {API_KEY,imageUrl} from '../constants/constants'
import './Banner.css';
import axios from '../axios/axios'

function Banner() {
    const [movie, setMovie] = useState({})
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[0])
        })
    })
    return (
        <div className="Banner"
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
            <div className="banner-content">
                <h1 className="movie-title">{movie ? movie.title : 'null'}</h1>
            </div>
            <div className="buttons">
                <button><i class="fas fa-play"></i> Play</button>
                <button className="ml-5"><i class="fas fa-list"></i> My List</button>
            </div>
            <div className="description">
                <h1 className="movie-description">Watch full Movie</h1>
                <p>
                {movie ? movie.overview : 'null'}
                </p>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
