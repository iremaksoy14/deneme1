/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";

export default  function Tiles5({
  className,
  iconColor = "success",
  widgetHeight = "150px",
  desc,
  number
  
}) {
  return (
    
    <>
      <div
        className={`card card-custom ${className}`}
        style={{ height: widgetHeight, width:"200px",marginLeft:10,  }}
      >
        <div className="card-body ">
       
         
          <div className="text-dark font-weight-bolder font-size-h4 mt-3 ">
           {desc}
          </div>

          <a s
            href="#"
            className="text-muted text-hover-primary font-weight-bold font-size-lg mt-1"
          >
            {number}
          
          </a>
        </div>
      </div>
    </>
  );
}
