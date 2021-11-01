/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
//import SVG from "react-inlinesvg";

import DropDown3 from './DropDown3'
import DropDown4 from './DropDown4'



export function DropDowns({ className }) {
  return (
   <div>

     
     
       <div className="col-lg-3 col-xxl-3 mb-10 ">  <DropDown3/></div>
       <div className="col-lg-3 col-xxl-3  mb-10">  <DropDown4/></div>
      
   </div>
     
  );
}
