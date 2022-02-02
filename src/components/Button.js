import React, { useState } from "react";

export const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {label}
    </button>
  );
};
