import React from 'react'

const Search = (props) => {
return (
   <div className="form-group title search">
      <label>Filter for a specific category</label>
      <select onChange= {props.filterCategory} className="form-control">
         <option>Select...</option>
         <option>Brewery</option>
         <option>Retail</option>
         <option>Trail</option>
         <option>Lodging</option>
         <option>Dog Park</option>
      </select>
   </div>
   )
}

export default Search