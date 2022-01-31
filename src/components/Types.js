import React from "react";

import { TypeLabel } from "./TypeLabel";

export const Types = ({ types }) => {
  return (
    <>
      <div className="types">
        <h2>TYPES</h2>
        {types?.map((type) => (
          <TypeLabel
            key={type?.type?.name}
            label={type?.type?.name.toUpperCase()}
          />
        )) || ""}
      </div>
    </>
  );
};
