import React from "react";

export default  function CheckerCheckbox({ isSelected, onChange, children }) {
  return (
    <>
      <input type="checkbox" style={{display: "none"}} />
      <label className="checkbox checkbox-lg checkbox-single">
     <input type="checkbox" checked={isSelected} onChange={onChange} />
       {children}
        <span />
      </label>
    </>
  );
}
