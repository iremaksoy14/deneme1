import {TABLE_ACTION_SUCCESS,TABLE_ACTION_BODY_SUCCESS} from './actionType'

 


  export const tableAction = (body) => dispatch=>{

    

            
            
     dispatch({ type: TABLE_ACTION_SUCCESS, payload: body }).then(()=>{
         console.log("okeyy")
         .catch((err)=>{
             console.log("hata var")
         })
     })
            
        
}




  export const tableActionBody = (body)=>dispatch => {

    

            
            
     dispatch({ type: TABLE_ACTION_BODY_SUCCESS, payload: body })
            
        
}




