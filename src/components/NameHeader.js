import React from "react";

export const NameHeader = ({ name, id }) => {
  return (
    <div className="name-header">
      <p>{name || "???"}</p>
      <p>{`No. ${id}` || "???"}</p>
    </div>
  );
};
