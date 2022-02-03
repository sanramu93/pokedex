import React from "react";
import { Button } from "./Button";

export const PokemonNav = ({ prevPokemon, nextPokemon, randomPokemon }) => {
  return (
    <div className="pokemon-nav-container">
      <div className="pokemon-nav">
        <Button label="prev" onClick={prevPokemon} />
        <Button label="random" onClick={randomPokemon} />
        <Button label="next" onClick={nextPokemon} />
      </div>
    </div>
  );
};
