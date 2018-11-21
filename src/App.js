import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Form from './Components/Form';
import Search from './Components/Search';

class App extends Component {
  constructor() {
    super()
      this.state = {
        locations: [],
        filter_category: "Blah",
        id: "",
        location_name: "",
        location_address: "",
        description: "",
        category: "",
        ranking: "",
        image: ""
      }
  }
  
  async componentDidMount() {
    let result = await fetch("http://localhost:3001/")
    let data =  await result.json()
    this.setState({
        locations: data.locations
      })
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

  filterCategory = (event) => {
    let category = event.target.value.toLowerCase()
    this.setState({
      filter_category: category
    })
    let filteredLocations = this.state.locations.filter(location => {
    return location.category === this.state.filterCatergory
    })
    this.setState({
      locations: filteredLocations
    })
  }

  formData = (event) => {
    event.preventDefault()
    let newLocation = {
        id: (this.state.locations.length + 1),
        location_name: this.state.location_name,
        location_address: this.state.location_address,
        description: this.state.description,
        category: this.state.category,
        ranking: this.state.ranking,
        image: "https://dl.dropboxusercontent.com/s/hjwyykdtwyhe49x/Ace_Hardware.jpg"
      }
      fetch('http://localhost:3001/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(newLocation)
      })
      .then(response => (response.json()))
      .then(response => {
        this.setState({
          locations: [...this.state.locations, response]
        })
      })
    }
  
      
    //   fetch ("http://localhost:8082/api/messages", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8"
    //   },
    //   body: JSON.stringify(tempMessage)
    // })

    // .then(response => (response.json()))
    // .then(response => {
    //   this.setState({
    //     messages: [...this.state.messages, response]
    //   })
    // })
   

  render() {
    return (
      <Fragment>
     <div className="App">
       <div className= "main">
          <Header />
          <div className = "card-container">
            <Card locations = {this.state.locations}/>
          </div>
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
      </Fragment>
    );
  }
}

export default App;
