import React from 'react'
/*import logo from './logo.svg';*/
import './App.css';
import { Link } from 'react-router-dom';
class Welcome extends React.Component {
  render(){
      return (
        <div className="App">
            <h1>Welcome to PSBMS</h1>
            <Link to='/Loginpage'>
               <button type="button"  >
                 Login
               </button>
            </Link>

           <center>
            <Link to='/Signup'>
               <button type="button"  >
                     Signup
               </button>
            </Link>
             </center> 
        </div>
      );
  }
  
}


export default Welcome;