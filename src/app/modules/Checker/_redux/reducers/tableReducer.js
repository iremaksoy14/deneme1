import {TABLE_ACTION_SUCCESS,TABLE_ACTION_ERROR} from '../actions/actionType'


const initialState = {
 
  body:[{}],
  clientMessage:''
 
};



const  tableReducer= (state = initialState, action) => {
  switch (action.type) {
    

    //-----
    case TABLE_ACTION_SUCCESS:
      return { ...state, body: [...state.body, action.payload] }
    case TABLE_ACTION_ERROR:
      return { ...state, clientMessage: action.payload }
    default:
      return state
  }
}


export default tableReducer;