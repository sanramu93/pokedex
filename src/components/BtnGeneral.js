import React, { useState } from "react";

export const BtnGeneral = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="btn-general">
      {label}
    </button>
  );
};
