import React from "react"
import "../App.css"
import { useGlobalContext } from "./Context"
 const News =()=>{
     const {Loading,hits,remove}=useGlobalContext();
   if(Loading)
   {
       return <div className="loading"></div>
   }
     return(
       <section className="stories">
         {hits.map((items)=>{
           const { objectID, title, num_comments, url, points, author } = items;
           return(
             <article className="story" key={objectID}>
               <h4 className="title">{title}</h4>
               <p className="info">
                 {points} by <span>{author} |</span> | {num_comments}{''} comments
                 </p>
                 <div>
                   <a href={url} className="read-link" target="_blank" rel="noopener noreferrer">
                     read more </a>
                   <button className='remove-btn' onClick={()=>remove(objectID)}
              >
                remove
              </button>
                 </div>
               </article>
           )
         })}
         </section>
     )
 }
 export default News;