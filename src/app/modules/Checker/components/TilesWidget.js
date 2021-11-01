/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
export function TilesWidget({
  className,
  baseColor = "primary",
  widgetHeight = "140px",
  widgetWidth="220px",
  status,
  name
}) {
return (
    <>
      <div
        className={`card card-custom bg-${baseColor} ${className}`}
        style={{ height: widgetHeight,width:widgetWidth,marginTop:20 }}
      >
        <div className="card-body">
          <span className="svg-icon svg-icon-3x svg-icon-white ml-n2">
            <SVG src={toAbsoluteUrl("/media/svg/icons/Layout/Layout-4-blocks.svg")} />
          </span>
          <a href="#" className={`text-inverse-${baseColor} font-weight-bold font-size-h6 mt-1`}>{name} </a>
          <div className={`text-inverse-${baseColor} font-weight-bolder font-size-h3 mt-3`}>{status}</div>
          </div>
      </div>
    </>
  );
}
