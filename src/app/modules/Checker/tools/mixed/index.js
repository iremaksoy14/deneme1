/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
//import SVG from "react-inlinesvg";
import MixedWidget1 from './MixedWidget1'
import MixedWidget2 from './MixedWidget2'
import MixedWidget3 from './MixedWidget3'



export function MixedWidget({ className }) {
  return (
   <div>

         
       <div className="col-lg-10 col-xxl-10 mt-20 ml-30"><MixedWidget1/></div>
       <div className="col-lg-10 col-xxl-10 mt-20 ml-30">  <MixedWidget2/></div>
       <div className="col-lg-10 col-xxl-10 mt-20 ml-30">  <MixedWidget3/></div>
    
      
   </div>
     
  );
}
