import React from 'react';
import './Banner.css'

function Banner() {
    return (
        <div className="Banner">
            <div className="banner-content">
                <h1 className="movie-title">Movie name</h1>
            </div>
            <div className="buttons">
                <button><i class="fas fa-play"></i> Play</button>
                <button className="ml-5"><i class="fas fa-list"></i> My List</button>
            </div>
            <div className="description">
                <h1 className="movie-description">Watch full series</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque delectus nam exercitationem. Excepturi doloremque, quasi nam commodi adipisci exercitationem recusandae, delectus dicta nihil perferendis eos repudiandae error vitae molestiae a.
                </p>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner
