import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../constants/constants'
import './Banner.css';
import axios from '../axios/axios'
import { useHistory } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
    const [firstMovie, setfirstMovie] = useState({})
    const [secondMovie, setSecondMovie] = useState({})
    const [thirdMovie, setThirdMovie] = useState({})

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const history = useHistory()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            setfirstMovie(response.data.results[0])
            setSecondMovie(response.data.results[1])
            setThirdMovie(response.data.results[2])
        })
    })
    return (
        <Slider {...settings}>
            <div>
                <div className="Banner"
                    style={{ backgroundImage: `url(${firstMovie ? imageUrl + firstMovie.backdrop_path : ''})` }}>
                    <div className="banner-content">
                        <h1 className="movie-title">{firstMovie ? firstMovie.title : 'null'}</h1>
                    </div>
                    <div className="buttons">
                        <button onClick={() => history.push(`/watch/${firstMovie.id}`)}><i className="fas fa-play"></i> Play</button>
                    </div>
                    <div className="description">
                        <h1 className="movie-description">Watch full Movie</h1>
                        <p>
                            {firstMovie ? firstMovie.overview : 'null'}
                        </p>
                    </div>
                    <div className="fade"></div>
                </div>
            </div>

            <div>
                <div className="Banner"
                    style={{ backgroundImage: `url(${secondMovie ? imageUrl + secondMovie.backdrop_path : ''})` }}>
                    <div className="banner-content">
                        <h1 className="movie-title">{secondMovie ? secondMovie.title : 'null'}</h1>
                    </div>
                    <div className="buttons">
                        <button onClick={() => history.push(`/watch/${secondMovie.id}`)}><i className="fas fa-play"></i> Play</button>
                    </div>
                    <div className="description">
                        <h1 className="movie-description">Watch full Movie</h1>
                        <p>
                            {secondMovie ? secondMovie.overview : 'null'}
                        </p>
                    </div>
                    <div className="fade"></div>
                </div>
            </div>

            <div>
                <div className="Banner"
                    style={{ backgroundImage: `url(${thirdMovie ? imageUrl + thirdMovie.backdrop_path : ''})` }}>
                    <div className="banner-content">
                        <h1 className="movie-title">{thirdMovie ? thirdMovie.title : 'null'}</h1>
                    </div>
                    <div className="buttons">
                        <button onClick={() => history.push(`/watch/${thirdMovie.id}`)}><i className="fas fa-play"></i> Play</button>
                    </div>
                    <div className="description">
                        <h1 className="movie-description">Watch full Movie</h1>
                        <p>
                            {thirdMovie ? thirdMovie.overview : 'null'}
                        </p>
                    </div>
                    <div className="fade"></div>
                </div>
            </div>
        </Slider>
    )
}

export default Banner
