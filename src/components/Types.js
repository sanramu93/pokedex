import React from "react";

export const Types = ({ types }) => {
  return (
    <div className="types">
      <h2>TYPES</h2>
      {types?.map((type) => (
        <p key={type?.type?.name} className={`type-label ${type?.type?.name}`}>
          {type?.type?.name.toUpperCase()}
        </p>
      )) || ""}
    </div>
  );
};
