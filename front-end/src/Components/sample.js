import React, { Component } from 'react';
import './../Styles/sample.css';

class Sample extends Component {
  state = {
    todos: [] //filled with the information pulled
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

  //makes the text white, gets the title, amout, and timestamp fro the map
  render() {
    return (
      <div className='pos'>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <p className = 'col'>{item.title}</p>
            <p className = 'col'>{item.amount}</p>
            <p className = 'col'>{item.dateTime}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Sample;