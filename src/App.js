import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';

class App extends Component {
  constructor() {
    super()
      this.state = {
        locations: [],
      }
  }
  
  async componentDidMount() {
    let result = await fetch("http://localhost:3001/locations")
    let data =  await result.json()
    this.setState({
        locations: data.locations
      })
      console.log(this.state.locations)
  }
  
  render() {
    return (
     <div className="App">
       <div className= "main">
          <Header />
          <div className = "card-container">
            <Card locations = {this.state.locations}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
