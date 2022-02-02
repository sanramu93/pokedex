import React, { useState, useEffect } from "react";
// import bulbasaur from "../img/bulbasaur.png";

import { fetchPokemon } from "../apis/pokeAPI";

export const CardEvoChain = (evoId) => {
  const [evoPokemon, setEvoPokemon] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon(evoId.evoId);
        setEvoPokemon(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [evoId]);

  return (
    <figure className="evolution">
      <img src={evoPokemon?.sprites?.front_default} />
      <figcaption className="evopokemon-name">{evoPokemon?.name}</figcaption>
    </figure>
  );
};
