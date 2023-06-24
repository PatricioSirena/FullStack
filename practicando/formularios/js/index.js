// // console.log(document);
// // document.querySelector(`.title-1`).textContent = `Nuevo Titulo`;
// // console.log(document.querySelector(`.title-1`));

// // console.log(document.querySelector(`h3`));

// // console.log(document.querySelector(`#parrafo1`));

// const parrafo = document.querySelector(`#parrafo1`);
// parrafo.textContent = `Este es un parrafo que cambiamos desde js`;
// parrafo.innerHTML = `<b>Texto agregado con innerHTML</b>` //Modifica elementos capturados
// parrafo.classList.add(`parrafo-nuevo`,`m-5`)  // Agrega Clases a los elementos capturados


// const lista = document.getElementById(`lista`);
// // console.log(lista);

// // const li = document.createElement(`li`);
// // li.textContent = `Primer elemento`;
// // lista.appendChild(li);

// const arrayElement = [`Primer elemento`,`Segundo elemento`,`Tercer elemento`];

// // //     arrayElement.forEach(item => {
// // //     console.log(item);
// // //     const li = document.createElement(`li`);
// // //     li.textContent = item; 
// // //     lista.appendChild(li);  
// // // });

// // arrayElement.forEach(item => {
// //     lista.innerHTML += `<li>${item}</li>`;
// // });

// const elementoFragment = document.createDocumentFragment();
// // const elementoFragment = new DocumentFragment(); // Cualquiera de las dos maneras sirve!!

// // arrayElement.forEach(elemento => {
// //     const li = document.createElement(`li`)
// //     li.textContent = elemento;
// //     elementoFragment.appendChild(li)
// // });

// // lista.appendChild(elementoFragment);


// arrayElement.forEach(elemento => {
//     const li = document.createElement(`li`)
//     li.textContent = elemento;
//     const primerNodo = elementoFragment.firstChild
//     console.log(elemento, primerNodo);
//     elementoFragment.insertBefore(li, primerNodo)
// });

// lista.appendChild(elementoFragment);


// const lista = document.querySelector(`#lista`);

// const arrayLista = [`item 1`, `item 2`, `item 3`];

// const fragment = document.createDocumentFragment();

// arrayLista.forEach(item => {
//     const li = document.createElement(`li`);
//     li.classList.add(`list`);
//     const b = document.createElement(`b`);
//     b.textContent = `Nombre: `;
//     const span = document.createElement(`span`);
//     span.classList.add(`text-danger`);
//     span.textContent = item;
//     li.appendChild(b);
//     li.appendChild(span);
//     fragment.appendChild(li);
// });

// lista.appendChild(fragment);

// let fragment = ``;

// arrayLista.forEach(item => {
//     fragment += `
//     <li class="list">
//         <b>Nombre: </b><span class="text-danger">${item}</span>
//     </li>
//     `
// });

// lista.innerHTML = fragment;

// {/* <li class="list">
//   <b>Nombre: </b><span class="text-danger">Descripción</span>
// </li> */}

// const template = document.querySelector(`#template-li`).content;
// const fragment = document.createDocumentFragment();

// arrayLista.forEach(item => {
//     // template.querySelector(`.list span`).textContent = item;
//     template.querySelector(`.text-danger`).textContent = item;
//     // template.querySelector(`span`).textContent = item;
//     const clone = template.cloneNode(true);
//     fragment.appendChild(clone);
// });

// lista.appendChild(fragment)

// function muestraOpcion (){
//     let opciones = document.getElementsByName(`eleccion`);
//     console.log(opciones);
//     for (let i = 0; i < opciones.length; i++) {
//         if (opciones[i].checked){
//             alert(opciones[i].value);
//         }
//     }
// }

// function aniadirTexto (){
//     var texto = document.getElementById("texto");
//     var mostrar = document.getElementById("mostrar_texto");
    
//     mostrar.innerHTML += texto.value;
// }

// ---------- Ejercicio ----------

// function mayorNum (){
//     var num1 = parseInt(document.getElementById(`num1`).value);
//     var num2 = parseInt(document.getElementById(`num2`).value);

//     if (num1 > num2) {
//         alert("El primer numero es mayor que el segundo");
//     }
//     if(num2 > num1){
//         alert("El segundo numero es mayor que el primero");
//     }
//     else{
//         alert("Los numeros son iguales")
//     }
// }

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;   
// }

// function generarNumeros(params) {
//     let elementos = document.getElementById(`elementos`);

//     let opcionesGeneradas = "";

//     for (let i = 0; i < 10; i++) {       
//         opcionesGeneradas += "<option>" + getRandomInt(1,100) + "<option/>";
//     }

//     elementos.innerHTML = opcionesGeneradas;
// }

// function insertarNombre(evt) {
//     evt.preventDefault();

//     let nombre = document.getElementById("nombre").value;

//     if (nombre == "") {
//         alert("Debe ingresar un nombre");
//     }
//     else{
//         let opcion = "<li>" + nombre + "</li>";

//         let lista = document.getElementById("lista-nombres");
        
//         lista.innerHTML += opcion;

//         alert("Se ha insertado el nombre: " + nombre);
//     }

    
// }

// function recogerDatos(){

//     let nombreCliente = document.getElementById("nombre_cliente").value;
//     let telefonoCliente = document.getElementById("telefono_cliente").value;
//     let emaulCliente = document.getElementById("email_cliente").value;

//     let sabor = "";

//     let saborVainilla = document.getElementById("vainilla");
//     let saborChocolate = document.getElementById("chocolate");
//     let saborMixto = document.getElementById("mixto");
    
//     if (saborVainilla.checked) {
//         sabor = saborVainilla.value;
//     }
//     else if (saborChocolate.checked){
//         sabor = saborChocolate.value;
//     }
//     else{
//         sabor = saborMixto.value;
//     }

//     let recipiente;

//     let recipienteCopa = document.getElementById("copa");
//     let recipienteCucurucho = document.getElementById("cucurucho");

//     if (recipienteCopa.checked) {
//         recipiente = recipienteCopa.value;
//     }
//     else{
//         recipiente = recipienteCucurucho.value;
//     }

//     let extra = [];

//     let extraCaramelo = document.getElementById("caramelo_extra");
//     let extraKitkat = document.getElementById("kitkat_extra");
//     let extraChocolate = document.getElementById("chocolate_extra");

//     if (extraCaramelo.checked) {
//         extra.push(extraCaramelo.value);
//     }

//     if (extraKitkat.checked) {
//         extra.push(extraKitkat.value);
//     }

//     if (extraChocolate.checked) {
//         extra.push(extraChocolate.value);
//     }



//     let mensajeFinal = "El cliente: "+ nombreCliente +
//                         ", telefono: "+ telefonoCliente +
//                         ", email: "+ emaulCliente +  
//                         ", ha elegido un helado sabor: "+ sabor +
//                         ", en un recipiente: "+ recipiente +
//                         ", con los agregados: ";

//     for (let i = 0; i < extra.length; i++) {
//         const element = extra[i];

//         mensajeFinal += element +" ";
        
//     }

//     alert(mensajeFinal);
// }   

let alumnos = ["Raul", "Diego", "Maria", "Esteban", "Maha", "Gabi"];

//Como accedo a un elemento del array
console.log(alumnos[2]);

//Cantidad de elementos del array
console.log(alumnos.length);

//Como mostrar el ultimo elemento del array
console.log(alumnos[alumnos.length -1]);

//Agregar elementos al array
alumnos.push("Pato", "Noelia", "Melina");


//Eliminar el ultimo elemento del array
alumnos.pop();

//Como recorrer un array
for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);    
}