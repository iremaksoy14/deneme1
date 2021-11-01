/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect} from "react";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import axios from 'axios'
export default  function Tiles2({ className, widgetHeight = "175px" ,desc,number}) {
  const backgroundImageUrl = toAbsoluteUrl("/media/bg/bg-9.jpg");
  return (
    <>
      {/* begin::Tiles Widget 3 */}
      <div
        className={`card card-custom bgi-no-repeat bgi-no-repeat bgi-size-cover ${className}`}
        style={{
          width:"200px",
          height: widgetHeight,
          backgroundImage: `url("${backgroundImageUrl}")`,
        }}
      >
        {/* begin::Body */}
        <div className="card-body d-flex flex-column">
          {/* begin::Title */}
          <a
            href="#"
            className="text-dark-75 text-hover-primary font-weight-bolder font-size-h3"
          >
            Properties
          </a>
        
          {/* end::Title */}
        </div>
        <div className="card-body d-flex flex-column">
          {/* begin::Title */}
          <a
            href="#"
            className="text-dark-75 text-hover-primary font-weight-bolder font-size-h3"
          >
            number
          </a>
        
          {/* end::Title */}
        </div>
        
        {/* end::Body */}
      </div>
      {/* end::Tiles Widget 3 */}
    </>
  );
}
