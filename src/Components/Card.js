import React from 'react';

const Card = (props) => {
   if (props.locations.length > 0){
      return props.locations.map(location => {
      return (
         <div className="card" >
            <img className="card-img-top" src= {location.image} alt="Card image placholder"></img>
            <div className="card-body">
               <h5 className="card-title">{location.location_name}</h5>
               <p className="card-text">{location.description}</p>
               <span>{location.location_address}</span>
            </div>
         </div>   
      )
      })} else {
         return null
      }
   }


export default Card;