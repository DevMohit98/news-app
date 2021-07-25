import React from "react"
import "../App.css"
import { useGlobalContext } from "./Context"
 const Buttons =()=>{
     const {Buttons,Loading,page,nbPages} =useGlobalContext();
     return(
         <div className="btn-container">
<button disabled={Loading} onClick={()=>Buttons("dec")}>
prev
</button>
<p>{page+1}of {nbPages}</p>
<button disabled={Loading} onClick={()=>Buttons("inc")}>
next
</button>
         </div>
     )
 }
 export default Buttons;