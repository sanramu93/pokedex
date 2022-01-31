export const fetchPokemon = async (id = 1) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSpecies = async (id = 2) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchEvoChain = async (id = 1) => {
  let url = "";
  // Fetch species first
  try {
    const data = await fetchSpecies(id);
    url = await data.evolution_chain;
  } catch (err) {
    console.log(err);
  }

  // Fetch evolution chain
  console.log(url);
};
fetchEvoChain();
