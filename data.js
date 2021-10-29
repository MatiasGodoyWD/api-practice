async function getPokemon() {
  let data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0.`
  );
  let pkmnArr = await data.json();
  return pkmnArr;
}

async function getPokemonData(url) {
  let data = await fetch(`${url}`);
  let pkmn = await data.json();
  return pkmn;
}

async function getUrl() {
  let pokemons = await getPokemon();
  pokemons = pokemons.results;
  let urlArray = [];
  pokemons.forEach((pkmn) => urlArray.push(pkmn.url));

  return urlArray;
}

async function fetchPkmns() {
  let urls = await getUrl();
  let pkmnData = [];

  urls.forEach(async (url) => {
    let pkmn = await getPokemonData(url);
    pkmnData.push(pkmn);
  });
  return pkmnData;
}

export { getPokemon, getUrl, fetchPkmns };
