import React from "react";
import { Button } from "./Button";

export const PokemonNav = ({ prevPokemon, nextPokemon, id }) => {
  return (
    <div className="pokemon-nav-container">
      <div className="pokemon-nav">
        <Button label="prev" onClick={prevPokemon} />
        <Button label="next" onClick={nextPokemon} />
      </div>
    </div>
  );
};
