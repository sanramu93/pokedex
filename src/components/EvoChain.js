import React, { useState, useEffect } from "react";

import { fetchPokemon } from "../apis/pokeAPI";
import { capitalize } from "../utilities/utilities";

export const EvoChain = ({ evoId }) => {
  const [evoPokemon, setEvoPokemon] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon(evoId);
        setEvoPokemon(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [evoId]);

  return (
    <figure className="evolution">
      <img src={evoPokemon?.sprites?.front_default || ""} />
      <figcaption className="evo-pokemon-name">
        {capitalize(evoPokemon?.name)}
      </figcaption>
    </figure>
  );
};
