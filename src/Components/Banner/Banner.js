import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../constants/constants'
import './Banner.css';
import axios from '../axios/axios'
import { useHistory } from 'react-router-dom'

const randomNum = Math.floor(Math.random()*10)

function Banner() {
    const [movie, setMovie] = useState({})

    const history = useHistory()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            setMovie(response.data.results[randomNum])
        })
    })
    return (
        
            <div>
                <div className="Banner"
                    style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}>
                    <div className="banner-content">
                        <h1 className="movie-title">{movie ? movie.title : 'null'}</h1>
                    </div>
                    <div className="buttons">
                        <button onClick={() => history.push(`/watch/${movie.id}`)}><i className="fas fa-play"></i> Play</button>
                    </div>
                    <div className="description">
                        <h1 className="movie-description">Watch full Movie</h1>
                        <p>
                            {movie ? movie.overview : 'null'}
                        </p>
                    </div>
                    <div className="fade"></div>
                </div>
            </div>

        
    )
}

export default Banner
