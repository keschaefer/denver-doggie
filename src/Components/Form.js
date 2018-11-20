import React, { Fragment } from 'react';


const Form = (props) => {
   return(
      <Fragment>
         <div className= "form-container">
         <form>
         <h3>Know of a pup-friendly spot? Add it to our site!</h3>
            <div class="form-group title name">
               <label>Location Name</label>
               <input type="text" class="form-control" placeholder="Location Name"></input>
            </div>
            <div class="form-group title category">
               <label>Category</label>
               <select class="form-control">
                  <option>Brewery</option>
                  <option>Retail</option>
                  <option>Trail</option>
                  <option>Lodging</option>
                  <option>Dog Park</option>
               </select>
            </div>
            <div class="form-group title address">
               <label>Location Address</label>
               <input type="text" class="form-control" placeholder="Location Address"></input>
            </div>
            <div class="form-group title description">
               <label>Description</label>
               <textarea class="form-control" rows="5" placeholder= "Describe your location, why is it such a great spot to bring your pup along?"></textarea>
            </div>
            <div className= "ranking-container">
               <label>Rank this Location</label>
               <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" value="1"></input>
                  <label class="form-check-label">1</label>
               </div>
               <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" value="1"></input>
                  <label class="form-check-label">2</label>
               </div>
               <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" value="1"></input>
                  <label class="form-check-label">3</label>
               </div>
               <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" value="1"></input>
                  <label class="form-check-label">4</label>
               </div>
               <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" value="1"></input>
                  <label class="form-check-label">5</label>
               </div>
               <button onClick= {props.formData} className= "submit-button btn btn-info">Submit</button>
            </div>      
            </form>
         </div>
      </Fragment>
   )
}

export default Form