import React from "react"
import "../App.css"
import { useGlobalContext } from "./Context"
 const SearchForm =()=>{
     const {query,Search}=useGlobalContext();
     return(
         <form className="search-form" onSubmit={(e)=>e.preventDefault()}>
    <h2>Search News</h2>
    <input type="text"
    className="form-input"
    value={query}
    onChange={(e)=>Search(e.target.value)}>
    </input>
         </form>
     )
 }
 export default SearchForm;