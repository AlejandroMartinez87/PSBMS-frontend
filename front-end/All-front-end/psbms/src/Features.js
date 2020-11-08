import React from "react";
import "./Features.css"

function Features({id, title, image, rating}) {
    return (
        <div className="features">
            <div className="features__info">
                <p>{title}</p>
            </div>
            <img src={image} alt=""/>
            <button>Read More</button>
        </div>
    );
}

export default Features
