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

        <div className="benefit">
          Our system differs by striving to be more general and multipurpose use rather than specializing 
          in one single area (like Mint, Ynab, and Mvelopes do). Moreover, our system will not handle customer 
          financial information and personal information like social security numbers (like Mint and Quicken). 
          In this way it is similar to Quicken, but differs on that we want our app to have far more functions 
          than Quicken does and have the ability to fully support the running of a business.
        </div>

        <div className="privacy__info">
            <h3>Non-Disclosure Agreement (NDA)</h3> 
            I. THE PARTIES. This Website Design Non-Disclosure Agreement, hereinafter known as the
            “Agreement”, created on the 30 day of Novemnber, 2020 is by and
            between PSBMS, hereinafter known as the “1
            st Party”, and Users, hereinafter known as the “2
            nd Party”, and collectively known as
            the “Parties”. <h4>(Source: Investopedia.com )</h4>

        </div>
    </div>

        
    )
}

export default Home
