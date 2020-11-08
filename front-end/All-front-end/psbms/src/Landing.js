//@flow
import React from 'react';
import './Comp/App.css';
// import Sample from './Comp/Components/sample.js';
// import LandSample from './LandSample';
// import Sidebar from './Comp/Components/Sidebar.js';
import Calendar from './Comp/Components/calendar.js';
// import { BrowserRouter as Router, Switch,Route} from "react-router-dom";

function Landing() {
  return (
    <div className="bg">
      {/* <Sidebar/>
      <Sample/> */}
      <Calendar/>
</div>
  );
}

export default Landing;
