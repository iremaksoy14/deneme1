import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers/index";
import ReduxThunk from "redux-thunk";
import "../../../../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../../../../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../../../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "../../../../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";


// import ContextProvider from "./context/context";
import Calendar from "./Components/Calendar/Calendar";

const rootReducer = combineReducers({
  state: reducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function Index() {
  // const classes = [{owner: "agj", className: "angdo", description: "ahgoeg", id:"23"}]
  return (

   
    <Provider store={store}>
     
      <Calendar />
      
    </Provider>
   
  );
}
