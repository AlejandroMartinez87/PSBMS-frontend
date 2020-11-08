import React from "react"; 
import "./Home.css"; 
import HomeI from "./homeP.png"; 
// import Logo from "./logo.png"; 
import Features from "./Features";
// import { Link } from "react-router-dom";
// import Prod1 from "./prod1.jpg";

function psbms() {
    return (
        <div className="home">
        {/* <img className="home__image" src={HomeI} alt=""/>  */}
        <img 
                className="home__image"
                // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                src={HomeI}
                alt=""
            /> 

        <div className="home__row">
            <Features
            id="1"
            title="Login"
            price={11.96}
            rating={1}
            // image={Logo}
            />

            <Features
            id="2"
            title="Sign Up"
            price={14.99}
            rating={4}
            // image={Logo}
            />
        </div>

        <div className="home__row">
            <Features
            id="1"
            title="Next Payment Calculation"
            price={11.96}
            rating={1}
            // image={Logo}
            />

            <Features
            id="2"
            title="Goals"
            price={14.99}
            rating={4}
            // image={Logo}
            />
        </div>


        <div className="home__row">
            <Features
            id="1"
            title="Cashflow"
            price={11.96}
            rating={1}
            // image={Logo}
            />

            <Features
            id="2"
            title="Inventory"
            price={14.99}
            rating={4}
            // image={Logo}
            />
        </div>

        <div className="home__row">
            <Features
            id="2"
            title="Scheduling"
            price={14.99}
            rating={4}
            // image={Logo}
            />
        </div>
        
    </div>

    );
}

export default psbms
