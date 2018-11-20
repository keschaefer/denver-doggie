import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Form from './Components/Form'

class App extends Component {
  constructor() {
    super()
      this.state = {
        locations: [],
        id: "",
        location_name: "",
        address: "",
        description: "",
        category: "",
        image: "https://dl.dropboxusercontent.com/s/hjwyykdtwyhe49x/Ace_Hardware.jpg"
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
  
  saveLocationName = (event) => {
    event.preventDefault()
    this.setState({
      location_name: event.target.value
    })
  }

  saveCategory = (event) => {
    event.preventDefault()
    this.setState({
      category: event.target.value
    })
  }

  saveLocationAddress = (event) => {
    event.preventDefault()
    this.setState({
      location_address: event.target.value
    })
  }

  saveDescription = (event) => {
    event.preventDefault()
    this.setState({
      description: event.target.value
    })
  }

  formData = (event) => {
    event.preventDefault()
    newLocation = {
        id: (this.state.locations.length + 1),
        business_name: this.state.business_name,
        address: this.state.business_address,
        description: this.state.description,
        category: this.state.category,
        image: "https://dl.dropboxusercontent.com/s/hjwyykdtwyhe49x/Ace_Hardware.jpg"
      }
      fetch('localhost:3000/')
    }
  }

  render() {
    return (
      <Fragment>
     <div className="App">
       <div className= "main">
          <Header />
          <div className = "card-container">
            <Card locations = {this.state.locations}/>
          </div>
          <Form 
          formData = {this.formData}
          saveLocationName = {this.saveLocationName}
          saveCategory = {this.saveCategory}
          saveLocationAddress = {this.saveLocationAddress}
          saveDescription = {this.saveDescription}
          />
        </div>
      </div>
      </Fragment>
    );
  }
}

export default App;
