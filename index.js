import { printPokemons } from "./dom.js";

function main() {
  console.time("main");
  const container = document.querySelector(".container");
  printPokemons(container);
  console.timeEnd("main");
}
main();
