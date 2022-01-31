export const fetchPokemon = async (id = 1) => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSpecies = async (id) => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + id);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

// export const fetchEvolutionChain = async (id = 1) => {
//   const species = await fetchPokemonUrl(
//     `https://pokeapi.co/api/v2/evolution-chain/${id}`
//   );
//   console.log(species);
// };

// fetchEvolutionChain();
