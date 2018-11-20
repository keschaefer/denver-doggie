import React from 'react';

const Card = (props) => {
   return props.locations.map(location => {
      console.log(location.image)
      return (
         <div className="card" key = {location.id}>
            <img className="card-img-top" src= {location.image} alt="Card image placholder"></img>
            <div className="card-body">
               <h5 className="card-title">{location.location_name}</h5>
               <p className="card-text">{location.description}</p>
               <span>{location.location_address}</span>
            </div>
         </div>   
      )
   })
}

export default Card;