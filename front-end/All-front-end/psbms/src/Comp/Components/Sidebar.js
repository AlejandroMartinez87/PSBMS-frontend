import React, { useState } from 'react';
import './../Styles/sidebar.css';
//import './../Styles/npc.css';
import Npcform from './../Components/npcform.js';
import CashFlow from './../Components/cashflow.js';
import GOALS from './../Components/goals.js';
import INVENTORY from './../Components/inventory.js';
import SCHEDULING from '../../EventSchedule';

function Sidebar(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [Payment, setPayment] = useState(false);
    const showPayment = () => setPayment(!Payment);

    const [Cashflow, setCashflow] = useState(false);
    const showCashflow = () => setCashflow(!Cashflow);

    const [Goals, setGoals] = useState(false);
    const showGoals = () => setGoals(!Goals);

    const [Inventory, setInventory] = useState(false);
    const showInventory = () => setInventory(!Inventory);

    const [Scheduling, setScheduling] = useState(false);
    const showScheduling = () => setScheduling(!Scheduling);


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
            <b1 className = {sidebar ? 'mini2' : 'mini2-non'} onMouseEnter = {turnWhite} onMouseLeave = {turnBlack} onClick={showGoals}>Goals</b1>
            <b1 className = {sidebar ? 'mini3' : 'mini3-non'} onMouseEnter = {turnWhite} onMouseLeave = {turnBlack} onClick={showCashflow}>Cashflow</b1>
            <b1 className = {sidebar ? 'mini4' : 'mini4-non'} onMouseEnter = {turnWhite} onMouseLeave = {turnBlack} onClick={showInventory}>Inventory</b1>
            <b1 className = {sidebar ? 'mini5' : 'mini5-non'} onMouseEnter = {turnWhite} onMouseLeave = {turnBlack} onClick={showScheduling}>Scheduling</b1>
            <button className =  {sidebar ? 'dot' : 'dot-non'} onClick={showSidebar}></button>
            {!Payment ? '' : <Npcform/>}
            {!Cashflow ? '' : <CashFlow/>}
            {!Goals ? '' : <GOALS/>}
            {!Inventory ? '' : <INVENTORY/>}
            {!Scheduling ? '' : <SCHEDULING/>}
        </div>
    )
}
//the use of ternary operators is to show and hide the forms
export default Sidebar
