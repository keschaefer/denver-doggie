import React from 'react';

const Card = (props) => {
   if (props.searchLocations.length > 0) {
      return props.searchLocations.map(location => {
         return (
            <div className="card" key = {location.id}>
               <div className= "card-img">
                  <img className="card-img-top" src= {location.image} alt="Card placholder"></img>
               </div>
               <div className="card-body">
                  <h5 className="card-title">{location.location_name}</h5>
                  <p className="card-text">{location.description}</p>
                  <p className= "card-address">{location.location_address}</p>
                  <button className= "delete-button" id= {location.id} className="delete-button btn btn-info" onClick= {props.deleteLocation}>Delete</button>
               </div>
            </div>   
         )
      })} else if (props.locations.length > 0) {
         return props.locations.map(location => {
            return (
               <div className="card" key = {location.id}>
                  <div className= "card-img">
                     <img className="card-img-top" src= {location.image} alt="Card placholder"></img>
                  </div>
                  <div className="card-body">
                     <h5 className="card-title">{location.location_name}</h5>
                     <p className="card-text">{location.description}</p>
                     <p className= "card-address">{location.location_address}</p>
                     <button className= "delete-button" id= {location.id} className="delete-button btn btn-info" onClick= {props.deleteLocation}>Delete</button>
                  </div>
               </div> 
            )
         })} else {
         return null
      }
   }


export default Card;