/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import Tiles1 from './Tiles1'
import Tiles2 from './Tiles2'
import Tiles3 from './Tiles3'
import Tiles4 from './Tiles4'
import Tiles5 from './Tiles5'
import Tiles6 from './Tiles6'
import Tiles7 from './Tiles7'
import Tiles8 from './Tiles8'




export function Tiles({ className }) {
  return (
   <div>

         
       <div className="col-lg-4 col-xxl-4 mt-20 ml-30"><Tiles1/></div>
       <div className="col-lg-4 col-xxl-4 mt-20 ml-30">  <Tiles2/></div>
          
       <div className="col-lg-4 col-xxl-4 mt-20 ml-30"><Tiles3/></div>
       <div className="col-lg-4 col-xxl-4 mt-20 ml-30">  <Tiles4/></div>
       <div className="col-lg-4 col-xxl-4 mt-20 ml-30">  <Tiles5/></div>
       <div className="col-lg-4 col-xxl-4 mt-20 ml-30">  <Tiles6/></div>
       <div className="col-lg-4 col-xxl-4 mt-20 ml-30">  <Tiles7/></div>
       <div className="col-lg-4 col-xxl-4 mt-20 ml-30">  <Tiles8/></div>
  
    
      
   </div>
     
  );
}
