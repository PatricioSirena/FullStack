const alumnos = ["Tutty","Agustin","Nati","Pato","Cristian"];

const [,,a2] = alumnos;

console.log(a2);

const useState = ["Tutty", (name) => {console.log(`Hola ${name}`);}]

const [nombre, funcion] = useState;

console.log(nombre);
funcion("Pato");
// console.log(useState);