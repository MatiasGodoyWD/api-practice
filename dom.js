import { fetchPkmns } from "./data.js";

//Imprimir los pkmns en pantalla
async function printPokemons(contenedor) {
  console.time("print");
  let arrPkmns = await fetchPkmns();

  arrPkmns.sort((a, b) => a.order - b.order);

  for (const pk of arrPkmns) {
    let caja = document.createElement("div");
    caja.classList.add("pkmn-container");
    caja.innerHTML = `   
    <p class='pkmn-name'>${pk.name}</p>   
    <div class="sprites-container">
    <img src=${pk.sprites.back_default}>
    <img src=${pk.sprites.front_default}>
    <img src=${pk.sprites.back_shiny}>
    <img src=${pk.sprites.front_shiny}>
    </div>
    `;
    contenedor.appendChild(caja);
  }
  console.timeEnd("print");
}

export { printPokemons };
