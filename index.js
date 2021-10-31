import { printPokemons } from "./dom.js";

function main() {
  console.time("time");
  const container = document.querySelector(".container");
  printPokemons(container);
  console.timeEnd("time");
}
main();
