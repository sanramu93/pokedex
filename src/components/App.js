import React, { useState, useEffect } from "react";

import { fetchPokemon } from "../apis/pokeAPI";

import { NameHeader } from "./NameHeader";
import { Sprite } from "./Sprite";
import { Info } from "./Info";
import { SearchBar } from "./SearchBar";
import { Stats } from "./Stats";
import { Types } from "./Types";
import { CardEvolution } from "./CardEvolution";

export const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Random ID for testing
  const randomID = Math.floor(Math.random() * 898 + 1);

  // Set default ID
  const [id, setId] = useState(1);

  // ----------------
  const onTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    setId(searchTerm);
  };

  // Fetch Pokemon
  //  ----------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchPokemon(id);
        setPokemon(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <main className="container">
      {/* Section General */}
      <section className="section section-general">
        <NameHeader name={pokemon?.name || ""} id={pokemon?.id || 0} />
        <SearchBar
          onTermChange={onTermChange}
          onFormSubmit={onFormSubmit}
          searchTerm={searchTerm}
        />
        <Sprite
          pokemon={pokemon || "???"}
          sprites={pokemon?.sprites}
          name={pokemon?.name}
        />
        <Info speciesURL={pokemon?.species?.url} />
      </section>
      {/* End Section General */}

      {/* Section Detail */}
      <section className="section section-detail">
        <div className="stats-container">
          <Stats stats={pokemon?.stats || "???"} />
          <Types types={pokemon?.types} />
        </div>
        <div className="evolution-container">
          <CardEvolution />
          <CardEvolution />
          <CardEvolution />
        </div>
      </section>
      {/* End Section Detail */}
    </main>
  );
};
