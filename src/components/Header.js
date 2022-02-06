import React from "react";

export const Header = ({ name, id }) => {
  return (
    <div className="header">
      <h2>{name || ""}</h2>
      <h2>{`No. ${id}` || ""}</h2>
    </div>
  );
};
