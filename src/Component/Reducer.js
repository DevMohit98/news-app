import {
    setLoading,
 setStories,
Remove_Story,
Handle_Page,
Handle_Search
} from "./Actions"
 const reducer=(state,action)=>{
    switch(action.type){
        case setLoading :
            return {...state,Loading:true}
            case setStories:
                return{...state,
                    Loading:false,
                    hits:action.payload.hits,
                    nbPages:action.payload.nbPages
                }
                case Remove_Story:
                    return{
                        ...state,
                        hits:state.hits.filter((story)=>story.objectID!==action.payload)
                    }
                    case Handle_Search:
                        return {
                            ...state,query:action.payload,page:0
                        }
                    case Handle_Page:
                            if(action.payload==='inc')
                            {
                                let newPage;
                                newPage=state.page+1;
                                if(newPage>state.nbPages-1)
                                {
                                    newPage=0;
                                }
                                return {...state,page:newPage}
                            }
                            if(action.payload==='dec')
                            {
                                let newPage;
                                newPage=state.page-1;
                                if(newPage<0)
                                {
                                    newPage=state.nbPages-1;
                                }
                                return {...state,page:newPage}
                            }
                            break;
                        
            default :
            throw new Error(` no matching ${action.type} action`)
    }
  
 }
 export default reducer;