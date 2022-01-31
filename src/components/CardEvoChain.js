import React, { useEffect } from "react";
import bulbasaur from "../img/bulbasaur.png";
import { fetchEvoChain } from "../apis/pokeAPI";

export const CardEvoChain = () => {
  return (
    <div className="evolution">
      <h3>I</h3>
      <div>
        <img src={bulbasaur} alt={bulbasaur} />
      </div>
    </div>
  );
};
