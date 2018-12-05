import React, { Fragment } from 'react';


const Form = (props) => {
   return(
      <Fragment>
         <form className= "form-container">
         <h3>Know of a pup-friendly spot? Add it to our site!</h3>
            <div className="form-group title name">
               <p>Location Name</p>
               <input onChange = {props.saveLocationName} type="text" className="form-control" placeholder="Location Name"></input>
            </div>
            <div className="form-group title category">
               <p>Category</p>
               <select onChange = {props.saveCategory} className="form-control">
                  <option>Select...</option>
                  <option>Brewery</option>
                  <option>Retail</option>
                  <option>Trail</option>
                  <option>Lodging</option>
                  <option>Dog Park</option>
               </select>
            </div>
            <div className="form-group title address">
               <p>Location Address</p>
               <input onChange = {props.saveLocationAddress} type="text" className="form-control" placeholder="Location Address"></input>
            </div>
            <div className="form-group title description">
               <p>Description</p>
               <textarea onChange = {props.saveDescription} className="form-control" rows="5" placeholder= "Describe your location, why is it such a great spot to bring your pup along?"></textarea>
            </div>
            <button onClick= {props.formData} className= "submit-button btn btn-info">Submit</button>   
            </form>
      </Fragment>
   )
}

export default Form