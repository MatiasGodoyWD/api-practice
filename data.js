async function getKakuna() {
  const container = document.querySelector(".container");
  let data = await fetch("https://pokeapi.co/api/v2/pokemon/kakuna");
  let kakuna = await data.json();
  container.innerHTML = `<img src=${kakuna.sprites.front_shiny}></img>
                                    <p>${kakuna.name}</p>`;
  return getBeedril();
}
