import React from "react";

function InputBox({ label, type }) {
  return (
    <div className="form-group">
      <label htmlFor="email">{label}:*</label>
      <input type={type} id="{type}" name="email" required />
    </div>
  );
}

export default InputBox;
