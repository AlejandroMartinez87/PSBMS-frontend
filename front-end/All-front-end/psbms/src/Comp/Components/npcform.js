// import React, { useState, Component } from 'react';
import React, {Component } from 'react';
import  './../Styles/npc.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
//https://reactjs.org/docs/forms.html
class BasicTextFields extends Component {
  state = {
    todos: [], //filled with the information pulled,
    id: "1",
    title: "",
    description: "",
    amount: "",
    user: "2",
  };

  handleInput = (e) => { 
    this.setState({ 
        [e.target.name]: e.target.value, 
    }); 
  }; 

  handleSubmit = (e) => { 
    e.preventDefault(); 

    axios 
        .post("https://cse3311.herokuapp.com/api/payCheck/", { 
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

  
  render(){
  return (
    <form className = "formN"  onSubmit={this.handleSubmit}>
    <TextField id="outlined-search" onChange = {this.handleInput} type="text" name = "title" value ={this.state.title} label="State" variant="outlined" className = "space11"/>
    <TextField id="outlined-search" onChange = {this.handleInput} type="text" name = "description" value ={this.state.description} label="Hours" variant="outlined" className = "space22"/>
    <TextField id="outlined-search" onChange = {this.handleInput} type="text" name = "amount" value ={this.state.amount} label="$ amount Hour" variant="outlined" className = "space33"/>
      <Button type="submit" variant="outlined" color="secondary" className = "space44">
        Submit
      </Button>
      <h1 className = "title">Next Payment Calculation</h1>
    </form>
  );
}
}

export default BasicTextFields