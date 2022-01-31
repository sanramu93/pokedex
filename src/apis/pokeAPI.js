const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const fetchPokemon = async (id) => {
  try {
    const res = await fetch(BASE_URL + id);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchPokemonUrl = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchEvolutionChain = async (id = 1) => {
  const species = await fetchPokemonUrl(
    `https://pokeapi.co/api/v2/evolution-chain/${id}`
  );
  console.log(species);
};

// fetchEvolutionChain();
