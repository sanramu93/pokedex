import React from "react";

export const Header = ({ name, id }) => {
  return (
    <div className="header">
      <p>{name || ""}</p>
      <p>{`No. ${id}` || ""}</p>
    </div>
  );
};
