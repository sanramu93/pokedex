import React, { useEffect } from "react";
import bulbasaur from "../img/bulbasaur.png";

import { fetchPokemon } from "../apis/pokeAPI";

export const CardEvoChain = (evoId) => {
  console.log(evoId);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetchPokemon(evoId);
  //       console.log(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, [evoId]);
  // console.log(evoId);
  return (
    <div className="evolution">
      <img src={bulbasaur} alt={bulbasaur} />
    </div>
  );
};
