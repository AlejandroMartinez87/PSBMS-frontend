import React, { useState } from 'react';
import './../Styles/sidebar.css';
//import './../Styles/npc.css';
import Npcform from './../Components/npcform.js';
import CashFlow from './../Components/cashflow.js';

function Sidebar(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [Payment, setPayment] = useState(false);
    const showPayment = () => setPayment(!Payment);

    const [Cashflow, setCashflow] = useState(false);
    const showCashflow = () => setCashflow(!Cashflow);


    //change the colors between black n white, changed the fontsize before but now just color
    function turnWhite(e) {
        //e.target.style.background = 'white';
        e.target.style.color = 'white';
      }
    function turnBlack(e) {
        //e.target.style.background = 'white';
        e.target.style.color = 'black';
    }

    
    return (
//if the button is clicked it changes the sidebars state
//if a forms button is hovered it changes to white/black, if clicked it opens the form
        <div className =  {sidebar ? 'sidebar-active' : 'sidebar-nonactive'}>
            <b1 className = {sidebar ? 'mini1' : 'mini1-non'} onMouseEnter = {turnWhite} onMouseLeave = {turnBlack} onClick={showPayment}> Next Payment Calculation</b1>
            <b1 className = {sidebar ? 'mini2' : 'mini2-non'} onMouseEnter = {turnWhite} onMouseLeave = {turnBlack}>Goals</b1>
            <b1 className = {sidebar ? 'mini3' : 'mini3-non'} onMouseEnter = {turnWhite} onMouseLeave = {turnBlack} onClick={showCashflow}>Cashflow</b1>
            <b1 className = {sidebar ? 'mini4' : 'mini4-non'} onMouseEnter = {turnWhite} onMouseLeave = {turnBlack}>Inventory</b1>
            <b1 className = {sidebar ? 'mini5' : 'mini5-non'} onMouseEnter = {turnWhite} onMouseLeave = {turnBlack}>Scheduling</b1>
            <button className =  {sidebar ? 'dot' : 'dot-non'} onClick={showSidebar}></button>
            {!Payment ? 'hidden' : <Npcform/>}
            {!Cashflow ? 'hidden' : <CashFlow/>}
        </div>
    )
}
//the use of ternary operators is to show and hide the forms
export default Sidebar
