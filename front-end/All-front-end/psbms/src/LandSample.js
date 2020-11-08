//@flow
import React from 'react';
import './Comp/App.css';
import Sample from './Comp/Components/sample.js';
import Sidebar from './Comp/Components/Sidebar';

function Landing() {
  return (
    <div className="bg">
      <Sample/>
      <Sidebar/>
</div>
  );
}

export default Landing;
