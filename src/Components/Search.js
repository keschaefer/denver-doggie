import React from 'react'

const Search = (props) => {
return (
   <div className= "search-container">
      <p className= "search-header">SEARCH</p>
      <div className="form-group title filter">
         <p>Filter for a specific category</p>
            <div className= 'filter-block'>
               <select onChange= {props.handleChange} className="form-control" name= "filter_category">
                  <option>Select...</option>
                  <option>Brewery</option>
                  <option>Retail</option>
                  <option>Trail</option>
                  <option>Lodging</option>
                  <option>Dog Park</option>
               </select>
               <button className= "filter-btn btn btn-info" onClick= {props.filterCategory}>Filter</button>
            </div>
      </div>
         
      <div className= "search-bar form-group title search">
         <p>Or search by location name</p>
         <input class="form-control" type="text" placeholder="Enter a location name"></input>
      </div> 
   </div>
   )
}

export default Search