import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AutorenewIcon from "@material-ui/icons/Autorenew";

import { Button } from "./Button";

export const PokemonNav = ({ prevPokemon, nextPokemon, randomPokemon }) => {
  return (
    <div className="pokemon-nav-container">
      <div className="pokemon-nav">
        <Button icon={<ArrowBackIosIcon />} onClick={prevPokemon} />
        <Button icon={<AutorenewIcon />} onClick={randomPokemon} />
        <Button icon={<ArrowForwardIosIcon />} onClick={nextPokemon} />
      </div>
    </div>
  );
};
