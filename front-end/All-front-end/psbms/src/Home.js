import React from "react"; 
import "./Home.css"; 
import HomeI from "./homeP.png"; 
// import Logo from "./logo.png"; 
// import Features from "./Features";
// import { Link } from "react-router-dom";
// import Prod1 from "./prod1.jpg";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={HomeI} alt=""/> 
        </div>
    )
}

export default Home
