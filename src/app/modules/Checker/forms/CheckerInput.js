import React from "react";
import {CheckerFieldFeedbackLabel} from "./CheckerFieldFeedbackLabel";

const getFieldCSSClasses = (touched, errors) => {
  const classes = ["form-control"];
  if (touched && errors) {
    classes.push("is-invalid");
  }
  if (touched && !errors) {
    classes.push("is-valid");
  }
 return classes.join(" ");
};
export  default function CheckerInput({
  field, // { name, value, onChange, onBlur }
  form: { }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  type = "text",
  ...props
}) {
  return (
    <>


      {label && <label>Enter {label}</label>}
      <input
        type={type}
        className={getFieldCSSClasses()}
        {...field}
        {...props}
      />
      {withFeedbackLabel && (
        <CheckerFieldFeedbackLabel
        
          label={label}
          type={type}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}
