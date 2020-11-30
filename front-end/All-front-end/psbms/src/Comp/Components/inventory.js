import { List, Button} from 'antd';
import React, {Component} from 'react';
import 'antd/dist/antd.css';
import  './../Styles/goals.css';
import axios from "axios"; 
import TextField from '@material-ui/core/TextField';


class Inventory extends Component{

  state = {
    todos: [], //filled with the information pulled,
    id: "",
    name: "",
    description: "",
    cost_price: "",
    last_modified: "2020-11-30",
    barcode: "",
    quantity: "",
    restock: "",
    restock_quantity: "",
  };
  async componentDidMount() {
    try {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',  //a proxy url + target url to get around the cors request issue
      targetUrl = 'https://cse3311.herokuapp.com/api/inventory/'
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
        .post("https://cse3311.herokuapp.com/api/inventory/", { 

            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            cost_price: this.state.cost_price,
            quantity: this.state.quantity,
        }) 
        .then((res) => { 
            this.setState({ 
              name: "",
              cost_price: "",
              quantity: "",
            }); 
        }) 
        .catch((err) => {}); 
}; 

  render(){
    return (
        <div className="goals">
          <h1 className="bet">Inventory</h1>

          <form className = "formf"  onSubmit={this.handleSubmit}>
      <TextField id="outlined-search" onChange = {this.handleInput} type="text" name = "name" value ={this.state.name} label="Product_Name" variant="outlined"/>
    <TextField id="outlined-search" onChange = {this.handleInput} type="text" name = "cost_price" value ={this.state.cost_price} label="Cost" variant="outlined"/>
    <TextField id="outlined-search" onChange = {this.handleInput} type="text" name = "quantity" value ={this.state.quantity} label="Quantity" variant="outlined"/>
      <button type="submit" variant="outlined" color="secondary">
        Submit
      </button>
      </form>
      
            <List
            itemLayout="horizontal"
            dataSource={this.state.todos}
            renderItem={item => (
            <List.Item className="item">
                <List.Item.Meta title={item.name}/>
                <List.Item.Meta className = "task" description={item.cost_price}/>
                <Button className="decrease">Dec</Button>
                <List.Item.Meta  className = "itemcount" description={item.quantity}/>
                <Button className="increase">Inc</Button>
            </List.Item>
            )}/>
          
    </div>
  );
  }
}
  
export default Inventory;