/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
//import SVG from "react-inlinesvg";
import ListWidget1 from './ListWidget1'
import ListWidget2 from './ListWidget2'
import ListWidget3 from './ListWidget3'





export function ListWidget({ className }) {
  return (
   <div>

         
       <div className="col-lg-10 col-xxl-10 mt-10 ml-30"><ListWidget1/></div>
       <div className="col-lg-10 col-xxl-10 mt-10 ml-30">  <ListWidget2/></div>
       <div className="col-lg-10 col-xxl-10 mt-10 ml-30"><ListWidget3/></div>
    
       
      
   </div>
     
  );
}
