function getData() {
  let usuarios;
  fetch("https://reqres.in/api/users?page=2")
    .then((users) => users.json())
    .then((users) => {
      usuarios = users.data;
      console.log(usuarios);

      let container = document.querySelector(".container");
      usuarios.map((user) => {
        let foto = document.createElement("img");
        foto.src = user.avatar;
        container.appendChild(foto);
      });
      document.querySelector(".loading").style.display = "none";
    });
}

export { getData };
