import { fetchPkmns, ultimoPokemonPorVer } from "./data.js";
let ultimoPokemon;
let pkmnLimit = 898;

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(ultimoPokemonPorVer);
        if (ultimoPokemonPorVer.id <= pkmnLimit) {
          printPokemons();
        } else {
          return;
        }
      }
    });
  },
  {
    rootMargin: "0px 0px 0px 0px",
    treshhold: 1.0,
  }
);

//Imprimir los pkmns en pantalla
async function printPokemons() {
  const container = document.querySelector(".pokedex-container");
  let arrPkmns = await fetchPkmns();

  // arrPkmns.sort((a, b) => a.order - b.order);
  const pkmnHTML = arrPkmns
    .map((pkmn) => {
      if (pkmn.id <= pkmnLimit) {
        return ` <div class="pkmn-container">
        <div class="img__container">
          <img loading="lazy" src=${pkmn.sprites.front_default} alt=${
          pkmn.name
        } class="img">
        </div>  
        <div class="poke__info">
          <h2 class="poke__name">#${pkmn.id} ${pkmn.name}</h2>
          <div class="poketypes__container">
          ${pkmn.types
            .map((tipo) => {
              return `<span class="poke__type ${tipo.type.name}">${tipo.type.name}</span>`;
            })
            .join("")}  
          </div>
          <div class="physicalinfo__container">
            <span class="physicalinfo"><span class="highlight">Height : </span>${
              pkmn.height / 10
            } Mts.</span>
            <span class="physicalinfo"><span class="highlight">Weight : </span>${
              pkmn.weight / 10
            } Kg.</span>
          </div>
      </div>
    
      </div>`;
      } else {
        return;
      }
    })
    .join("");

  container.innerHTML += pkmnHTML;
  if (ultimoPokemon) {
    observer.unobserve(ultimoPokemon);
  }
  const pkmnsMostrados = document.querySelectorAll(".pkmn-container");
  ultimoPokemon = pkmnsMostrados[pkmnsMostrados.length - 1];
  observer.observe(ultimoPokemon);
}

export { printPokemons };
