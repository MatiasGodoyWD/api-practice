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
    <img src=${pk.sprites.back_default} alt=${pk.name}/>
    
    <img src="${pk.sprites.front_default} alt=${pk.name}/>
    <p>${pk.name}</p>
    </div>`;
    contenedor.appendChild(caja);
  }
}

export { printPokemons };
