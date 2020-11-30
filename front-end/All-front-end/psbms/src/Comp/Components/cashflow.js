import React, { Component } from 'react';
import  './../Styles/cashflow.css';
import * as ReactBootStrap from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import axios from "axios"; 

class List extends Component {
        state = {
          todos: [], //filled with the information pulled,
          id: "1",
          title: "",
          description: "",
          amount: "",
          user: "2",
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
        handleInput = (e) => { 
          this.setState({ 
              [e.target.name]: e.target.value, 
          }); 
        }; 
      
        handleSubmit = (e) => { 
          e.preventDefault(); 
      
          axios 
                .post("https://cse3311.herokuapp.com/api/expenses/", { 
                  title: this.state.title, 
                  description: this.state.description, 
                  amount: this.state.amount, 
                  user: this.state.user,
                  id: this.state.id,
              }) 
              .then((res) => { 
                  this.setState({ 
                    title: "",
                    description: "",
                    amount: "",
                  }); 
              }) 
              .catch((err) => {}); 
      }; 

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

            <form className = "formf"  onSubmit={this.handleSubmit}>
            <TextField id="outlined-search" onChange = {this.handleInput} type="text" name = "title" value ={this.state.title} label="Title" variant="outlined" />
    <TextField id="outlined-search" onChange = {this.handleInput} type="text" name = "description" value ={this.state.description} label="Description" variant="outlined"/>
    <TextField id="outlined-search" onChange = {this.handleInput} type="text" name = "amount" value ={this.state.amount} label="$ amount" variant="outlined"/>
      <button type="submit" variant="outlined" color="secondary">
        Submit
      </button>
      </form>

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