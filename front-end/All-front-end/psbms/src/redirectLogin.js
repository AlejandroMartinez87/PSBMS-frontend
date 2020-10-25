import React from 'react'; 
import {Redirect} from 'react-router-dom'; 
import Loginpage from './Loginpage';

const redirectLogin = () => {
    return <Redirect to="/Loginpage"/>
}; 

export default redirectLogin;