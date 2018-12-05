import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Form from './Components/Form';
import Search from './Components/Search';
import Description from './Components/Description'
import Footer from './Components/Footer'

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
    
   handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
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

    filterCategory = () => {
      let filteredLocations = this.state.locations.filter(location => {
        return location.category === this.state.filter_category.toLowerCase()
      })
      this.setState({
        locations: filteredLocations
      })
    }
    
    deleteLocation = (event) => {
    event.preventDefault()
    let deleteLocation = {
      id: event.target.id
      }
    fetch('http://localhost:3001', {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(deleteLocation)
    })
    let newLocations = this.state.locations.filter(location => {
      return location.id !== Number(deleteLocation.id)
    })
    this.setState({
      locations: newLocations
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
                handleChange= {this.handleChange}
                />
                <Form 
                formData = {this.formData}
                handleChange= {this.handleChange}
                />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
