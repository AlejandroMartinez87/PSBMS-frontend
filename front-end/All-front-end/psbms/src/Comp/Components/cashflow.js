import React, { Component } from 'react';
import  './../Styles/cashflow.css';
import * as ReactBootStrap from "react-bootstrap";
import TextField from '@material-ui/core/TextField';

class List extends Component {
        state = {
          todos: [], //filled with the information pulled,
        };
        async componentDidMount() {
          try {
            var proxyUrl = 'https://cors-anywhere.herokuapp.com/',  //a proxy url + target url to get around the cors request issue
            targetUrl = 'https://cse3311.herokuapp.com/api/expenses/'
            //const res = await fetch('https://cse3311.herokuapp.com/api/expenses/', {mode: 'cors'});
            const res = await fetch(proxyUrl+targetUrl);
            const todos = await res.json();
            this.setState({
              todos
            });
          } catch (e) {
            console.log(e);
          }
        }

    //for each item, load that item and give it the proper css
    renderItem = (thing, index) => {
        return(
            <tr key={index}>
                <td className='table-bodyL'>{thing.title}</td>
                <td className='table-bodyL'>{thing.description}</td>
                <td className='table-bodyL'>{thing.amount}</td>
            </tr>
        )
    }
//value={userID}
render() {
    return (
        //the thead is the header of the tables, after it is loaded dynamically
        <div className = 'formC'>
            <h1 className="bet">Review</h1>
            <TextField id="outlined-search" label="Start Date" type="search" variant="outlined" className = "spaceC"/>
            <TextField id="outlined-search" label="End Date" type="search" variant="outlined" className = "space2C"/>
            <ReactBootStrap.Table striped bordered hover className = "tableC">
                <thead>
                    <th className='headerC'>Item</th>
                    <th className='headerC'>Type</th>
                    <th className='headerC'>User</th>
                </thead>
                <tbody>
                    {this.state.todos.map(this.renderItem)}
                </tbody>
                </ReactBootStrap.Table>
        </div>
    );
}
}
  
  export default List