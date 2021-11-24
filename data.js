let offset = 0;
let ultimoPokemonPorVer;
// Me trae un array cuyos objetos representan a los pokemons, y tienen solo su name y una url al resto de la data.
async function getPokemon() {
  let data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}.`
  );
  let pkmnArr = await data.json();
  offset += 5;

  return pkmnArr;
}

// Traer la data de los url de cada pkmn
async function getPokemonData(url) {
  return fetch(`${url}`);
  //retorno una promesa
}

//Traerme una lista de las url para poder despues traerme la data de cada pokemon
async function getUrl() {
  let pokemons = await getPokemon();
  let urlArray = [];
  for (const pokemon of pokemons.results) {
    urlArray.push(pokemon.url);
  }
  return urlArray;
}

// Me traigo los datos de todos los pkmns del rango dado en un arr
async function fetchPkmns() {
  let urls = await getUrl();
  let promises = [];
  for (const url of urls) {
    let pkmn = getPokemonData(url);
    promises.push(pkmn);
  }

  const values = await Promise.all(promises).then(async (values) => {
    let res = [];
    for (let i = 0; i < values.length; i++) {
      const element = await values[i].json();
      res.push(element);
    }
    return res;
  });
  console.log(values);
  ultimoPokemonPorVer = values[values.length - 1];
  return values;
}

export { getPokemon, getUrl, fetchPkmns, getPokemonData, ultimoPokemonPorVer };
