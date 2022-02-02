export const fetchPokemon = async (id = 1) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSpecies = async (id = 1) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMove = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

//---------------------------------------------------
//Fetching Evolution Chain

export const getEvoChainUrl = async (id = 1) => {
  let evoChainUrl = "";
  // Fetch species first
  try {
    const data = await fetchSpecies(id);
    evoChainUrl = await data.evolution_chain.url;
  } catch (err) {
    console.log(err);
  }

  // Fetch evolution chain
  return evoChainUrl;
};

export const fetchEvoChain = async (id = "eevee") => {
  try {
    const url = await getEvoChainUrl(id);
    const response = await fetch(url);
    const data = await response.json();

    // Getting evolution chain ->
    //  https://stackoverflow.com/questions/39112862/pokeapi-angular-how-to-get-pokemons-evolution-chain

    let evoChain = [];
    let evoData = data.chain;
    do {
      let numberOfEvolutions = evoData["evolves_to"].length;

      evoChain.push({
        species_name: evoData.species?.name,
        min_level: !evoData ? 1 : evoData.min_level,
        trigger_name: !evoData ? null : evoData?.trigger?.name,
        item: !evoData ? null : evoData.item,
      });

      if (numberOfEvolutions > 1) {
        for (let i = 1; i < numberOfEvolutions; i++) {
          evoChain.push({
            species_name: evoData.evolves_to[i].species?.name,
            min_level: !evoData.evolves_to[i]
              ? 1
              : evoData.evolves_to[i].min_level,
            trigger_name: !evoData.evolves_to[i]
              ? null
              : evoData.evolves_to[i].trigger?.name,
            item: !evoData.evolves_to[i] ? null : evoData.evolves_to[i].item,
          });
        }
      }

      evoData = evoData["evolves_to"][0];
    } while (!!evoData && evoData.hasOwnProperty("evolves_to"));

    return evoChain;
  } catch (err) {
    console.log(err);
  }
};
