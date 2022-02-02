import React from "react";
import { BtnGeneral } from "./BtnGeneral";

export const PokemonNav = ({ prevPokemon, nextPokemon, id }) => {
  return (
    <div className="pokemon-nav">
      <BtnGeneral label="prev" onClick={prevPokemon} />
      <BtnGeneral label="next" onClick={nextPokemon} />
    </div>
  );
};
