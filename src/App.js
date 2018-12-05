import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Form from './Components/Form';
import Search from './Components/Search';
import Description from './Components/Description'

class App extends Component {
  constructor() {
    super()
      this.state = {
        locations: [],
        filter_category: "",
        filtered_locations: [],
        id: "",
        location_name: "",
        location_address: "",
        description: "",
        category: "",
        ranking: "",
        image: "",
        deleteId: ""
      }
  }
  getRequest = () => {
    fetch('http://localhost:3001/')
      .then(response => (response.json()))
      .then(response => {
        this.setState({locations: response})
      })
    }
    

  componentDidMount() {
    this.getRequest()
  }
    
  saveLocationName = (event) => {
    event.preventDefault()
    this.setState({
      location_name: event.target.value
    })
  }

  saveRanking = (event) => {
    event.preventDefault()
    this.setState({
      ranking: event.target.value
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
    let newLocation = {
        location_name: this.state.location_name,
        location_address: this.state.location_address,
        description: this.state.description,
        category: this.state.category,
        image: "https://dl.dropboxusercontent.com/s/hjwyykdtwyhe49x/Ace_Hardware.jpg"
      }
      fetch('http://localhost:3001', {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(newLocation)
      })
      .then(response => (response.json()))
      .then(response => {
        this.setState({
          locations: [...this.state.locations, response[0]]
        })
      })
    }

    deleteLocation = (event) => {
      event.preventDefault()
      let deleteLocation = {
            id: event.target.id
          }
          console.log("location id", deleteLocation)
          return fetch('http://localhost:3001', {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(deleteLocation)
          })
        .then(response => this.getRequest())
        .then(console.log(this.state.locations))
      }  
    
    filterCategory = (event) => {
      event.preventDefault()
      this.setState({
        filter_category: event.target.value.toLowerCase()
      })
      let filteredLocations = this.state.locations.filter(location => {
      return location.category === this.state.filter_catergory
      })
      this.setState({
        locations: filteredLocations
      })
    }
  
   
  render() {
    return (
      <Fragment>
        <div className="App">
          <div className= "body">
            <Header />
            <Description />
            <div className= "main-content">
              <div className = "card-container">
                <Card 
                locations = {this.state.locations}
                deleteLocation = {this.deleteLocation}/>
              </div>
              <div className= "search-form-content">
                <Search
                filterCategory= {this.filterCategory}
                />
                <Form 
                formData = {this.formData}
                saveLocationName = {this.saveLocationName}
                saveCategory = {this.saveCategory}
                saveLocationAddress = {this.saveLocationAddress}
                saveDescription = {this.saveDescription}
                saveRanking= {this.saveRanking}
                  />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
