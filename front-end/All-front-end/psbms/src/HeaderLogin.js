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
            <Link to="/signup" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineTwo">Sign Up</span>
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
