import React, { Fragment } from 'react';


const Form = (props) => {
   return(
      <Fragment>
         <div className= "form-container">
         <form>
         <h3>Know of a pup-friendly spot? Add it to our site!</h3>
            <div className="form-group title name">
               <label>Location Name</label>
               <input onChange = {props.saveLocationName} type="text" className="form-control" placeholder="Location Name"></input>
            </div>
            <div className="form-group title category">
               <label>Category</label>
               <select onChange = {props.saveCategory} className="form-control">
                  <option>Brewery</option>
                  <option>Retail</option>
                  <option>Trail</option>
                  <option>Lodging</option>
                  <option>Dog Park</option>
               </select>
            </div>
            <div className="form-group title address">
               <label>Location Address</label>
               <input onChange = {props.saveLocationAddress} type="text" className="form-control" placeholder="Location Address"></input>
            </div>
            <div className="form-group title description">
               <label>Description</label>
               <textarea onChange = {props.saveDescription} className="form-control" rows="5" placeholder= "Describe your location, why is it such a great spot to bring your pup along?"></textarea>
            </div>
            <div className= "ranking-container">
                  <label>Rank this Location</label>
                    
               <div  onClick= {props.saveRanking} className="form-check form-check-inline">
                  <input className="form-check-input"  type="radio" name= "gridRadios" id = "example" value="1"></input>
                  <label className="form-check-label" for= "example">1</label>
               </div>
               <div onClick= {props.saveRanking} className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" value="2"></input>
                  <label className="form-check-label" checked>2</label>
               </div>

               {/* <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            First radio */}


               <div onClick= {props.saveRanking} className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" value="3"></input>
                  <label className="form-check-label">3</label>
               </div>
               <div onClick= {props.saveRanking} className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" value="4"></input>
                  <label className="form-check-label">4</label>
               </div>
               <div onClick= {props.saveRanking} className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" value="5"></input>
                  <label className="form-check-label">5</label>
               </div>
               <button onClick= {props.formData} className= "submit-button btn btn-info">Submit</button>
            </div>      
            </form>
         </div>
      </Fragment>
   )
}

export default Form