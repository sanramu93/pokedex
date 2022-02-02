import React, { useState, useEffect } from "react";

import { fetchPokemon, fetchEvoChain } from "../apis/pokeAPI";

import { Header } from "./Header";
import { Sprite } from "./Sprite";
import { Info } from "./Info";
import { SearchBar } from "./SearchBar";
import { Stats } from "./Stats";
import { Types } from "./Types";
import { CardEvoChain } from "./CardEvoChain";
import { Moves } from "./Moves";
import { PokemonNav } from "./PokemonNav";
import { Button } from "./Button";

export const App = () => {
  const POKEMON_COUNT = 898;

  const [pokemon, setPokemon] = useState({});
  const [evoChain, setEvoChain] = useState([]);
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

  const nextPokemon = () => {
    let newId = id;
    newId < POKEMON_COUNT ? newId++ : (newId = 1);
    setId(newId);
  };

  const prevPokemon = () => {
    let newId = id;
    newId > 1 ? newId-- : (newId = POKEMON_COUNT);
    setId(newId);
  };

  // Fetch Pokemon
  //  ----------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await fetchPokemon(id);
        setPokemon(pokemonData);
        const evoChainData = await fetchEvoChain(id);
        setEvoChain(evoChainData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <main>
      {/* ----Section Left---- */}
      <section className="section section-left">
        <Header name={pokemon?.name || ""} id={pokemon?.id || 0} />
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
        <Info pokemon={pokemon || "???"} id={pokemon?.id || 0} />
      </section>
      {/* ----End Section Left---- */}

      {/* ---Section Right--- */}
      <section className="section section-right">
        <div className="stats-container">
          <Stats stats={pokemon?.stats || "???"} />
          <Types types={pokemon?.types} />
        </div>
        <div className="evo-chain-container">
          <Button label="<" />
          {evoChain.map((evo) => (
            <CardEvoChain key={evo.species_name} evoId={evo.species_name} />
          ))}
          <Button label=">" />
        </div>

        <Moves moves={pokemon?.moves} />

        <PokemonNav
          id={id}
          prevPokemon={prevPokemon}
          nextPokemon={nextPokemon}
        />
      </section>
      {/* ---End Section Right--- */}
    </main>
  );
};
