import React from "react";

export default  function CheckerHeaderCheckbox({isChecked, onChange}) {
  return (
    <label className="checkbox checkbox-lg checkbox-single">
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span />
     </label>
  );
}