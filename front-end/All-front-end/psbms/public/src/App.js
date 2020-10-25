import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Nav from './Nav';
import Contact from './Contact';
import About from './About';
import Loginpage from './Loginpage';
import Signup from './Signup';
import PSBMS from './PSBMS';
import Sidebar from './Comp/Components/Sidebar.js';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';


class App extends React.Component {

  render(){
    const DefaultRoutes= () =>{
      return (
        <div className="App">
            <Router> 
              <Nav/>
                <Switch>
                  <Route path="/" exact component={Welcome}/>
                  <Route path="/Contact" component={Contact}/>
                  <Route path="/About" component={About}/>
                  <Route path="/PSBMS" component={PSBMS}/>
                 
                </Switch>
          </Router>
        </div>
      )
  }


  return(
    <Router>
      <Switch>
         <Route path="/Loginpage" exact component={Loginpage}/>
         <Route path="/Signup" component={Signup}/>
         <Route path="/Sidebar" component={Sidebar}/>
         <Route component={DefaultRoutes}/>
      </Switch>
    </Router>
   
  );

}
}

export default App; 
