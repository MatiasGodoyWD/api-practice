import { fetchPkmns } from "./data.js";

async function printPokemons(contenedor) {
  let arrPkmns = await fetchPkmns();
  console.log(arrPkmns);
  await fetchPkmns();
  for (const pk of arrPkmns) {
    let caja = document.createElement("div");
    caja.classList.add("pkmn-container");
    caja.innerHTML = `      
    <div class="sprites-container">
    <img src=${pk.sprites.back_default}>
    <img src=${pk.sprites.front_default}>
    </div>
    <p class='pkmn-name'>${pk.name}</p>`;
    contenedor.appendChild(caja);
  }
}

export { printPokemons };
