import React from "react"; 
import "./Home1.css"; 
import HomeI from "./homeP.png"; 
// import Logo from "./logo.png"; 
// import Features from "./Features";
// import { Link } from "react-router-dom";
// import Prod1 from "./prod1.jpg";

function Home() {
    return (
    <div>


        <div className="homeA">
            <img className="home__imageA" src={HomeI} alt=""/> 
        </div>

        <div className="text__info">
            During the current situation that the entire world is going through we decided as a team to build a software product which will help individuals and small businesses to manage their financing and to keep up with their changing needs. Our product will provide features that will help them to cover everything they need in order to monitor their goals and expenses through our software product which we baptized as “Personal and Small Business Management System”. Its user-interface will be calendar based to show changes/updates while allowing the user to select which features to customize their options such as expense management.

        </div>
    </div>

        
    )
}

export default Home
