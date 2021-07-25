import React, { useContext, useEffect, useReducer } from "react"

import {
    setLoading,
 setStories,
Remove_Story,
Handle_Page,
Handle_Search
} from "./Actions"
import reducer from "./Reducer";

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const defaultState={
    Loading:true,
    hits:[],
query:"react",
page:0,
nbPages:0
};

const AppContext=React.createContext();

const AppProvider =({children})=>{
    const [state,dispatch]=useReducer(reducer,defaultState)

   const FetchStories=async (url)=>{
       dispatch({type:setLoading})
       try {
           const response=await fetch(url);
           const data=await response.json();
           dispatch({type:setStories,
            payload:{hits:data.hits,nbPages:data.nbPages}
        })

       } catch (error) {
           console.log(error);
       }
   }
   const remove=(id)=>{
       dispatch({type:Remove_Story,payload:id})
   }
   const Search=(query)=>{
       dispatch({type:Handle_Search,payload:query})
   }
const Buttons=(value)=>{
    dispatch({type:Handle_Page,payload:value})
}
  useEffect(()=>{
    FetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
},[state.query,state.page])
return(
    <AppContext.Provider value={{...state,remove,Search,Buttons}}>
    {children}
    </AppContext.Provider>
)
}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}