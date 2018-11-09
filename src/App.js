import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';

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
        <Header />
      </div>
    );
  }
}

export default App;
