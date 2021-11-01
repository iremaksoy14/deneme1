/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
//import SVG from "react-inlinesvg";
import StatsWidgets1 from './StatsWidget1'
import StatsWidgets2 from './StatsWidgets2'




export function StatWidget({ className }) {
  return (
   <div>

         
       <div className="col-lg-5 col-xxl-5 mt-20 ml-30"><StatsWidgets1/></div>
       <div className="col-lg-5 col-xxl-5 mt-20 ml-30"><StatsWidgets2/></div>
      
    
      
   </div>
     
  );
}
