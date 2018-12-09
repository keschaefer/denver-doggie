import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Form from "./Components/Form";
import Search from "./Components/Search";
import Description from "./Components/Description"
import Footer from "./Components/Footer"

class App extends Component {
  constructor() {
    super()
      this.state = {
        locations: [],
        id: "",
        location_name: "",
        location_address: "",
        description: "",
        category: "",
        image: "",
        deleteId: "",
        search: "",
        searchLocations: [],
        // filter_category: "",
        // filtered_locations: [],
      }
  }

  getRequest = () => {
    fetch("http://localhost:3001")
      .then(result => (result.json()))
      .then((response) => {
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
  
  // https://evening-journey-97622.herokuapp.com/

  formData = (event) => {
    event.preventDefault()
    let newLocation = {
        location_name: this.state.location_name,
        location_address: this.state.location_address,
        description: this.state.description,
        category: this.state.category,
        image: "https://via.placeholder.com/150",
      }
      fetch("http://localhost:3001", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(newLocation)
      })
      .then(response => (response.json()))
      .then(response => {
        this.setState({
          locations: [...this.state.locations, response[0]],
          location_name: "",
          location_address: "",
          description: "",
          category: ""
        })
      })
    }
    
    deleteLocation = (event) => {
    let locations = this.state.locations.filter(location => {
      return location.id !== Number(event.target.id)
    })
    this.setState({
      locations: locations
    })
    fetch(`http://localhost:3001/${event.target.id}`, {
      method: "DELETE",
    })
  }  
  
  searchByLocation = (event) => {
    this.setState({
      search: event.target.value
    })
  }
    // Filter only works on first click, need to refactor to work on successive clicks.
    // filterCategory = () => {
    //   let filteredLocations = this.state.locations.filter(location => {
    //     return location.category === this.state.filter_category.toLowerCase()
    //   })
    //   this.setState({
    //     locations: filteredLocations
    //   })
    // }
   
  render() {
    let specifiedLocation = this.state.locations.filter(location => {
      if (location.location_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
        return location
      }
    })
    return (
      <Fragment>
        <div className="App">
          <div className= "body">
            <Header />
            <Description />
            <div className= "main-content">
              <div className= "card-container">
                <Card 
                locations= {this.state.locations}
                searchLocations= {specifiedLocation}
                deleteLocation= {this.deleteLocation}/>
              </div>
              <div className= "search-form-content">
                <Search
                filterCategory= {this.filterCategory}
                handleChange= {this.handleChange}
                searchByLocation= {this.searchByLocation}
                />
                <Form 
                formData= {this.formData}
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
