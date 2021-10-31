//Traer la data desde el pokemon 0(offset) al 151(limit)
// Me trae un array cuyos objetos representan a los pokemons, y tienen solo su name y una url al resto de la data.
async function getPokemon() {
  let data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0.`
  );
  let pkmnArr = await data.json();

  return pkmnArr;
}

// Traer la data de los url de cada pkmn
async function getPokemonData(url) {
  let data = await fetch(`${url}`);
  let pkmn = await data.json();
  return pkmn;
}

//Traerme una lista de las url para poder despues traerme la data de cada pokemon
async function getUrl() {
  let pokemons = await getPokemon();
  pokemons = pokemons.results;
  let urlArray = [];
  pokemons.forEach((pkmn) => urlArray.push(pkmn.url));

  return urlArray;
}

// Me traigo los datos de todos los pkmns del rango dado en un arr
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
