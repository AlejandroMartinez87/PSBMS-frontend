import React, { Component } from 'react';
import './../Styles/sample.css';
import axios from "axios"; 

class Sample extends Component {
  state = {
    todos: [], //filled with the information pulled,
    id: "1",
    title: "",
    description: "",
    amount: "",
    user: "3",
    time: "2020-11-24T12:12:00.394182-06:00" 
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
            time: this.state.time,
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

  //makes the text white, gets the title, amout, and timestamp fro the map
  render() {
    return (
      <div className='pos'>


          <div className="container jumbotron "> 
              <form onSubmit={this.handleSubmit}> 
                    <div className="input-group mb-3"> 
                        <div className="input-group-prepend"> 
                            <span className="input-group-text"
                                  id="basic-addon1"> 
                                {" "} 
                                Author{" "} 
                            </span> 
                        </div> 
                        <input type="text" className="form-control" 
                               placeholder="Name of the Poet/Author"
                               aria-label="Username"
                               aria-describedby="basic-addon1"
                               value={this.state.title} name="title"
                               onChange={this.handleInput} /> 
                    </div> 
  
                    <div className="input-group mb-3"> 
                        <div className="input-group-prepend"> 
                            <span className="input-group-text"> 
                               Your Quote  
                            </span> 
                        </div> 
                        <textarea className="form-control " 
                                  aria-label="With textarea"
                                  placeholder="Tell us what you think of ....." 
                                  value={this.state.description} name="description" 
                                  onChange={this.handleInput}> 
                        </textarea> 
                    </div> 

                    <div className="input-group mb-3"> 
                        <div className="input-group-prepend"> 
                            <span className="input-group-text"> 
                               Your Quote  
                            </span> 
                        </div> 
                        <textarea className="form-control " 
                                  aria-label="With textarea"
                                  placeholder="Tell us what you think of ....." 
                                  value={this.state.amount} name="amount" 
                                  onChange={this.handleInput}> 
                        </textarea> 
                    </div> 
  
                    <button type="submit" className="btn btn-primary mb-5"> 
                        Submit 
                    </button> 
                </form> 
                <hr 
                    style={{ 
                        color: "#000000", 
                        backgroundColor: "#000000", 
                        height: 0.5, 
                        borderColor: "#000000", 
                    }} 
                />
                </div> 

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