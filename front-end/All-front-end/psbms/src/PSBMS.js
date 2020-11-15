import React from "react"; 
import "./Home.css"; 
// import HomeI from "./homeP.png"; 
// import Logo from "./logo.png"; 
import Features from "./Features";
// import { Link, useHistory } from "react-router-dom";
// import { auth } from "./firebase";
// import Prod1 from "./prod1.jpg";
import Inventory from "./Inventory.jpeg"; 
import Cashflow from "./cashflow.jpeg";
import Expenses from "./expenses.jpeg";
import Paycheck from "./Paycheck.jpeg";
import Scheduling from "./schedule.jpeg";
import Banner from "./linkedin_banner_image_2.png"



function psbms() {
    // const history = useHistory();
    return (
        <div className="home">
        <img 
                className="home__image"
                // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                // src={HomeI}
                src={Banner}
                alt=""
            /> 

        {/* <div className="home__row">
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
        </div> */}

        <div className="home__row">
            <Features
            id="1"
            title="Next Payment Calculation"
            price={11.96}
            rating={1}
            image={Paycheck}
            />

            <Features
            id="2"
            title="Expenses"
            price={14.99}
            rating={4}
            image={Expenses}
            />
             <Features
            id="1"
            title="Cashflow"
            price={11.96}
            rating={1}
            image={Cashflow}
            />
             
        </div>


        <div className="home__row">
            <Features
            id="1"
            title="e-commerce"
            price={11.96}
            rating={1}
            image={Cashflow}
            />

            <Features
            id="2"
            title="Inventory"
            price={14.99}
            rating={4}
            image={Inventory}
            />

            <Features
            id="2"
            title="Scheduling"
            price={14.99}
            rating={4}
            image={Scheduling}
            />
        </div>

        {/* <div className="home__row">
            <Features
            id="2"
            title="Scheduling"
            price={14.99}
            rating={4}
            image={Scheduling}
            />
        </div> */}
        
    </div>

    );
}

export default psbms
