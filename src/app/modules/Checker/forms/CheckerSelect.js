import React from "react";
import {useField} from "formik";
import {CheckerFieldFeedbackLabel} from "./CheckerFieldFeedbackLabel"

const getFieldCSSClasses = (touched, errors) => {
  const classes = ["form-control", "form-control-solid"];
  if (touched && errors) {
    classes.push("is-invalid-select");
  }
 if (touched && !errors) {
    classes.push("is-valid-select");
  }
 return classes.join(" ");
};

export default  function CheckerSelect({
  label,
  withFeedbackLabel = true,
  type = "text",
  customFeedbackLabel,
  children,
  ...props
}) {
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  return (
    <>
      {label && <label>Select {label}</label>}
      <select
        className={getFieldCSSClasses(touched, error)}
        {...field}
        {...props}
      >
        {children}
      </select>
      {withFeedbackLabel && (
        <CheckerFieldFeedbackLabel
          erros={error}
          touched={touched}
          label={label}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}
