import React from "react";
export default ({ label, placeholder, type }: { label: string; placeholder: string; type: string }) => {
  return (
    <div className="form-input-cst">
      <label>{label}</label>
      {type == "textarea" ? (
        <textarea className="form-control cst-text" placeholder={placeholder} rows={5}></textarea>
      ) : (
        <input className="form-control cst-text" placeholder={placeholder} />
      )}
    </div>
  );
};
