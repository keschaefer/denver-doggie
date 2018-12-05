import React from 'react'

const Search = (props) => {
return (
   <div>
      <p className= "search-header">SEARCH</p>
      <div className="form-group title search">
         <p>Filter for a specific category</p>
         <select onChange= {props.filterCategory} className="form-control">
            <option>Select...</option>
            <option>Brewery</option>
            <option>Retail</option>
            <option>Trail</option>
            <option>Lodging</option>
            <option>Dog Park</option>
         </select>
      </div>
      <div className= "search-bar form-group title search">
         <p>Or search by location name</p>
         <input class="form-control" type="text" placeholder="Enter a location name"></input>
      </div> 
   </div>
   )
}

export default Search