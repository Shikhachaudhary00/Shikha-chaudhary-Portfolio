import React from 'react';
import './Cards.css';

function Cards({ title, image, video }) {
    return (
        <div className='card'>
            <h1>{title}</h1>
            <div className="hovercard">
                {image && <img src={image} alt="Project Preview" />}
                {video && <video src={video} autoPlay loop muted></video>}
            </div>
        </div>
    );
}

export default Cards;
