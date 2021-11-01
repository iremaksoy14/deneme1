/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import BaseTables1 from './BaseTables1'
import BaseTables2 from './BaseTables2'
import BaseTables3 from './BaseTables3'

export function BaseTables({ className }) {
  return (
   <div>

         
       <div className="col-lg-10 col-xxl-10 mt-10 ml-30"><BaseTables1/></div>
       <div className="col-lg-10 col-xxl-10 mt-10 ml-30">  <BaseTables2/></div>
       <div className="col-lg-10 col-xxl-10 mt-10 ml-30">  <BaseTables3/></div>
       
      
   </div>
     
  );
}
