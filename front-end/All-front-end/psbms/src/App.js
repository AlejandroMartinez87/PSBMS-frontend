import React, {useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Header from "./Header";
import HeaderLo from "./HeaderLogin";
// import Login from "./Loginpage"
import Login from "./Login"
import Home from "./Home";
import Aboutus from "./Aboutus";
import Psbms from "./psbms"; 
import Contactus from "./Conctactus";
import Invest from "./Investment";
// import Welcome from './Welcome';
// import Nav from './Nav';
// import Loginpage from './Loginpage';
import Signup from './Signup';
import Landing from './Landing';
import LandingHeader from './LandingHeader';
// import Sample from './Comp/Components/sample.js';
import LandSample from './LandSample';
// import Sidebar from './Comp/Components/Sidebar.js';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import {loadStripe} from "@stripe/stripe-js";

function App() {
  const[{user},dispatch] = useStateValue(); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        }); 
      } 
      else{
          dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
        unsubscribe();
    }
  },[]);


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Aboutus">
            <Header/> 
            <Aboutus/>
          </Route>

          <Route path="/Psbms">
            <Header/>
            <Psbms/>
          </Route>

          <Route path="/Contactus">
            <Header/>
            <Contactus/>
          </Route>

          <Route path="/Landing">
            <LandingHeader/>
            <Landing/>
          </Route>

          <Route path="/Login">
            <HeaderLo/>
            <Login/>
          </Route>

          <Route path="/signup">
            <Signup/>
          </Route>

          <Route path="/invest">
            <Invest/>
          </Route>

          <Route path="/sample">
            <HeaderLo/>
            <LandSample/>
          </Route>


          <Route path="/">
            <Header/>
            <Home/>
          </Route>

        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
