import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom"; 
import Logo from "./logo_transparent.png";
// import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src={Logo} alt=""/> 
            </Link>

            <div className="header__nav">
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineTwo">Login</span>
                </div>
            </Link>
            </div>

            <div className="header__nav">
            <Link to="/aboutus" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineTwo">About us</span>
                </div>
            </Link>
            </div>

            <div className="header__nav">
            <Link to="/psbms" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineTwo">Psbms</span>
                </div>
            </Link>
            </div>

            <div className="header__nav">
            <Link to="/contactus" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineTwo">Conctact us</span>
                </div>
            </Link>
            </div>

            <div className="header__nav">
            <Link to="/landing" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineTwo">Dashboard</span>
                </div>
            </Link>
            </div>

            {/* <Link to="/checkout" className="header__link">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
             </Link> */}
         </nav>
       
    );
}

export default Header