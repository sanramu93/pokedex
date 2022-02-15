import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";

import { fetchPokemon, fetchEvoChain } from "../apis/pokeAPI";
import { Header } from "./Header";
import { Sprite } from "./Sprite";
import { Info } from "./Info";
import { SearchBar } from "./SearchBar";
import { Stats } from "./Stats";
import { Types } from "./Types";
import { EvoChain } from "./EvoChain";
import { Moves } from "./Moves";
import { PokemonNav } from "./PokemonNav";

import { capitalize } from "../utilities/utilities";

// TODO: Style app

// ----------------
const POKEMON_COUNT = 898;

export const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [evoChain, setEvoChain] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [id, setId] = useState(1);

  const onTermChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setId(searchTerm);
    e.target.reset();
  };

  // Debounced limits api calls from the user after 200ms
  const debouncedSetId = useCallback(
    debounce((pokemonID) => {
      setId(pokemonID);
    }, 200),
    []
  );

  const nextPokemon = () => {
    let newId;
    newId = id;
    newId < POKEMON_COUNT ? newId++ : (newId = 1);
    debouncedSetId(newId);
  };

  const prevPokemon = () => {
    let newId = id;
    if (newId <= POKEMON_COUNT) {
      newId > 1 ? newId-- : (newId = POKEMON_COUNT);
    } else {
      newId = POKEMON_COUNT;
    }
    debouncedSetId(newId);
  };

  const randomPokemon = () => {
    const randomID = Math.floor(Math.random() * POKEMON_COUNT + 1);
    debouncedSetId(randomID);
  };

  // Fetch Pokemon
  //  ----------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await fetchPokemon(id);
        setPokemon(pokemonData);
        setId(pokemonData.id);
        const evoChainData = await fetchEvoChain(id);
        setEvoChain(evoChainData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  //  ----------------

  return (
    <main className={`${!pokemon ? "main-disabled" : ""}`}>
      {/* ----Section Left---- */}
      <section
        className={`section section-left ${
          !pokemon ? "section-left-disabled" : ""
        }`}
      >
        <Header
          name={pokemon ? capitalize(pokemon?.name) : "Not Found"}
          id={pokemon ? pokemon?.id : "?"}
        />
        <SearchBar onTermChange={onTermChange} onFormSubmit={onFormSubmit} />
        <Sprite
          pokemon={pokemon}
          sprites={pokemon?.sprites}
          name={pokemon?.name}
        />
        <Info pokemon={pokemon || ""} id={pokemon?.id || ""} />
      </section>
      {/* ----End Section Left---- */}

      {/* ---Section Right--- */}
      <section
        className={`section section-right ${
          !pokemon ? "section-right-disabled" : ""
        }`}
      >
        <ul className="stats-container">
          <Stats stats={pokemon?.stats || ""} />
          <Types types={pokemon?.types} />
        </ul>
        <div
          className={`evo-chain-container ${
            evoChain.length > 3 ? "jc-start" : ""
          }`}
        >
          {/* <Button label="<" /> */}
          {evoChain?.map((evo) => (
            <EvoChain
              key={evo.species_name}
              pokemon={pokemon}
              evoId={evo.species_name}
            />
          ))}

          {/* <Button label=">" onClick={nextEvoChain} /> */}
        </div>
        <Moves moves={pokemon?.moves} />
        <PokemonNav
          prevPokemon={prevPokemon}
          nextPokemon={nextPokemon}
          randomPokemon={randomPokemon}
        />
      </section>
      {/* ---End Section Right--- */}
    </main>
  );
};
