
// let preguntas = localStorage.getItem("preguntas");
// console.log(JSON.parse(preguntas));

let alumnos = [
  { name: "Esteban" },
  { name: "Tutty" },
  { name: "Dami" },
  { name: "Agustin" },
  { name: "Natty" },
];
localStorage.setItem("alumnos", JSON.stringify(alumnos));
// localStorage.clear()
localStorage.removeItem("alumnos");

let login = `
<form id="form">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" name="recuerdame" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Recuerdame</label>
  </div>
  <button type="submit" class="btn btn-primary" onclick="logueado()">Ingresar</button>
  <button type="button" class="btn btn-primary" onclick="registrarUsuario()">Registrarse</button>
</form>
`;

let registrarse = `
<form id="registrarse">
<h2 class="text-white bg-dark">Registrarse</h2>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1"  class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1">
  </div>
  
  <button type="submit" class="btn btn-primary">Registrarse</button>
  
</form>
`;

let profile = `
<div class="container">
    <div class="row">
        <div id="backg" class="col-sm-12 col-md-4 col-lg-4 mb-5">
            <img id="foto" src="./img/perfil.jpg" alt="" />
        </div>
        <div id="name" class="col-sm-12 col-md-8 col-lg-8 mb-5">
            <h2><b>Patricio Sirena</b></h2>
        </div>
    </div>
    <div class="row">
        <div id="list" class="col-sm-12 col-md-4 col-lg-4 mt-5 mb-5">
            <ul>
                <li>
                    <a href="#">Datos personales</a>
                </li>
                <li>
                    <a href="#">Formación academica</a>
                </li>
                <li>
                    <a href="#">Empleo</a>
                </li>
                <li>
                    <a href="#">Idiomas</a>
                </li>
                <li>
                    <a href="#">Otros</a>
                </li>
            </ul>
        </div>
        <div id="description" class="col-sm-12 col-md-8 col-lg-8 mt-5 mb-5">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ad
                unde ea iusto deleniti ipsam similique eius optio voluptatibus
                dignissimos doloremque velit porro, fugiat saepe quaerat nam ipsa
                dolores tenetur. Molestiae veniam ut repellendus alias, possimus
                eius quia, aliquid soluta deleniti magnam corrupti tempore fuga a
                eligendi labore. Tempore sapiente obcaecati quibusdam asperiores ex
                totam reprehenderit dolores neque soluta magnam! Minima doloremque,
                saepe eius quae cum quam non omnis pariatur voluptas architecto quos
                velit. Illo sint quibusdam, quaerat, deleniti laboriosam recusandae
                mollitia alias rerum sit et reprehenderit dolorem eius
                exercitationem!
            </p>
        </div>
    </div>
    <div id="more" class="col-sm-12 mt-5">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis est,
            blanditiis vitae autem reiciendis fuga, quibusdam consectetur amet
            repellat aliquid placeat! Dolore suscipit quos nam in explicabo
            necessitatibus eos facilis?
        </p>
    </div>
</div>
`;
let miArraY = [];

let contenedor = document.querySelector(".container");
contenedor.classList.add("d-flex");
contenedor.classList.add("justify-content-center");
contenedor.classList.add("align-items-center");
contenedor.innerHTML += login;
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  //  let datos ={  email:e.target[0].value}

  const data = Object.fromEntries(new FormData(e.target));
  // console.log(JSON.stringify(data));
  // console.log(data);
  // sessionStorage.setItem("user", JSON.stringify(data));
});


function logueado() {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    let datosGuardados = localStorage.getItem("usuarios");
    let objData = JSON.parse(datosGuardados);

    if (verficarUsuario(data.email)){
      document.querySelector(".container").innerHTML = profile;
      alert("Bienvenido!!")
    } else {
      alert("No existe este usuario, registrate")
    }
  })
  
}


function registrarUsuario() {
  document.querySelector(".container").innerHTML = registrarse;
  document.getElementById("registrarse").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    //buscando los datos del localStorage
    let datosGuardados = localStorage.getItem("usuarios");

    if (datosGuardados != null) {
      let objData = JSON.parse(datosGuardados);
      if (verficarUsuario(data.email)) {
        console.log("El usuario existe");
      } else {
        console.log("Usuario resgistrado con éxito!");

        miArraY = objData;
        miArraY.push(data);
        localStorage.setItem("usuarios", JSON.stringify(miArraY));
        let contenedor = document.querySelector(".container");
        contenedor.classList.add("d-flex");
        contenedor.classList.add("justify-content-center");
        contenedor.classList.add("align-items-center");
        contenedor.innerHTML = login;
      }
    } 
      // else {
      //   miArraY.push(data);
      //   localStorage.setItem("usuarios", JSON.stringify(miArraY));
      //   let contenedor = document.querySelector(".container");
      //   contenedor.classList.add("d-flex");
      //   contenedor.classList.add("justify-content-center");
      //   contenedor.classList.add("align-items-center");
      //   contenedor.innerHTML = login;
      // }
  });
}


function verficarUsuario(email) {
  console.log(email);
  let datosGuardados = localStorage.getItem("usuarios");
  let objData = JSON.parse(datosGuardados);
  miArraY = objData;
  for (let i = 0; i < miArraY.length; i++) {
    if (email == miArraY[i].email) {
      return true;
    }
  }
}
