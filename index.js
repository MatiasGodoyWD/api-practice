import { printPokemons } from "./dom.js";
import { getPokemon, getUrl, fetchPkmns } from "./data.js";

function main() {
  console.log("inicio ejecucion");
  const container = document.querySelector(".container");
  printPokemons(container);
}
main();
