import React, { forwardRef } from "react";
import clsx from "clsx";
//import SVG from "react-inlinesvg";
//import {toAbsoluteUrl} from "../../_helpers";

export const Notice = forwardRef(
  (
    {
      icon,
      svg,
      iconRef,
      textRef,
      iconWrapperRef,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        {...props}
        ref={ref}
        style={{width:"100%",backgroundColor:"white"}}
        role="alert"
        className={clsx(
          "alert alert-custom  alert-shadow gutter-b",
          className
         
        )}
      >


        <div className="" ref={textRef}>
          {children}
        </div>
      </div>
    );
  }
);

// Set display name for debugging.
if (process.env.NODE_ENV !== "production") {
  Notice.displayName = "Notice";
}
