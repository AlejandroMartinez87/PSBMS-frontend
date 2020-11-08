//@flow
import React from 'react';
import './Comp/App.css';
import Sample from './Comp/Components/sample.js';
import Sidebar from './Comp/Components/Sidebar.js';
import Calendar from './Comp/Components/calendar.js';

function Landing() {
  return (
    <div className="bg">
      <Sidebar/>
      <Sample/>
      <Calendar/>
  </div>
  );
}

export default Landing;
