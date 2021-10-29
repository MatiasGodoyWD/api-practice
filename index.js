function main() {
  console.log("inicio ejecucion");
  const container = document.querySelector(".container");
  async function getPokemon(pokemon) {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let pkmn = await data.json();
    container.innerHTML = `<img src=${pkmn.sprites.front_shiny}></img>
                                          <p>${pkmn.name}</p>`;
    console.log(`${pkmn.name} creado`);
  }
  async function printPokemon(pokemon) {
    getPokemon(pokemon);
    await getPokemon("beedrill");
  }

  printPokemon("kakuna");
}
main();
