//Traer la data desde el pokemon 0(offset) al 251(limit)
// Me trae un array cuyos objetos representan a los pokemons, y tienen solo su name y una url al resto de la data.
async function getPokemon() {
  console.time("first");
  let data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=251&offset=0.`
  );
  let pkmnArr = await data.json();

  console.timeEnd("first");
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
  console.time("urls");
  let pokemons = await getPokemon();
  let urlArray = [];
  for (const result of pokemons.results) {
    urlArray.push(result.url);
  }

  console.timeEnd("urls");
  return urlArray;
}

// Me traigo los datos de todos los pkmns del rango dado en un arr
async function fetchPkmns() {
  console.time("fetchpkmns");
  let urls = await getUrl();
  let pkmnData = [];
  for (const url of urls) {
    let pkmn = await getPokemonData(url);
    pkmnData.push(pkmn);
  }

  console.timeEnd("fetchpkmns");
  return pkmnData;
}

export { getPokemon, getUrl, fetchPkmns };
