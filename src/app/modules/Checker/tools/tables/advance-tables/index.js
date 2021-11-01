/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
//import SVG from "react-inlinesvg";
import AdvanceTables1 from './AdvanceTables1'
import AdvanceTables2 from './AdvanceTables2'
import AdvanceTables3 from './AdvanceTables3'
import AdvanceTables4 from './AdvanceTables4'
import AdvanceTables5 from './AdvanceTables5'


export function Tables({ className }) {
  return (
   <div>

         
       <div className="col-lg-10 col-xxl-10 mt-10 ml-30"><AdvanceTables1/></div>
       <div className="col-lg-10 col-xxl-10 mt-10 ml-30">  <AdvanceTables2/></div>
       <div className="col-lg-10 col-xxl-10 mt-10 ml-30">  <AdvanceTables3/></div>
       <div className="col-lg-10 col-xxl-10 mt-10 ml-30">  <AdvanceTables4/></div>
       <div className="col-lg-10 col-xxl-10 mt-10 ml-30">  <AdvanceTables5/></div>
      
   </div>
     
  );
}
