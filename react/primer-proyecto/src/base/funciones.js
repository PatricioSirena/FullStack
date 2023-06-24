// function saludar(nombre) {
//     return `Hola ${nombre}`
// }

// console.log(saludar("Pato"));

const saludar = nombre => `Hola ${nombre}`;

console.log(saludar("Pato"));

// const getUser = () =>{
//     return {
//         uid: "adc123",
//         username: "Pato92"
//     }
// }

const getUser = () => ({uid: "abc123", username: "Pato92"})

console.log(getUser());

const getUserActive = (nombre) => ({uid: "ABC123", username:nombre})
let usuarioActivo = getUserActive("Tutty");
console.log(usuarioActivo);
