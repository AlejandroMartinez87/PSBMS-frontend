import React from 'react';
import  './../Styles/cashflow.css';
import * as ReactBootStrap from "react-bootstrap";
import TextField from '@material-ui/core/TextField';

function List() {
    //sample data before we had the get working
    const orders = [
        {item: "Build-A-Bear", type: "Misc", user: "John"},
        {item: "Phone", type: "Tech", user: "John"},
        {item: "Build-A-Bear", type: "Misc", user: "John"},
        {item: "Phone", type: "Tech", user: "John"},
        {item: "Build-A-Bear", type: "Misc", user: "John"},
        {item: "Phone", type: "Tech", user: "John"},
        {item: "Build-A-Bear", type: "Misc", user: "John"},
        {item: "Phone", type: "Tech", user: "John"},
        {item: "Chick-Fil-A", type: "Food", user: "John"}
    ]

    //for each item, load that item and give it the proper css
    const renderItem = (thing, index) => {
        return(
            <tr key={index}>
                <td className='table-bodyL'>{thing.item}</td>
                <td className='table-bodyL'>{thing.type}</td>
                <td className='table-bodyL'>{thing.user}</td>
            </tr>
        )
    }
//value={userID}
    return (
        //the thead is the header of the tables, after it is loaded dynamically
        <div className = 'formC'>
            <TextField id="outlined-search" label="Start Date" type="search" variant="outlined" className = "spaceC"/>
            <TextField id="outlined-search" label="End Date" type="search" variant="outlined" className = "space2C"/>
            <ReactBootStrap.Table striped bordered hover className = "tableC">
                <thead>
                    <th className='headerC'>Item</th>
                    <th className='headerC'>Type</th>
                    <th className='headerC'>User</th>
                </thead>
                <tbody>
                    {orders.map(renderItem)}
                </tbody>
                </ReactBootStrap.Table>
        </div>
    );
  }
  
  export default List