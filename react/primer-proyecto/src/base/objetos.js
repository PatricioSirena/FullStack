const persona = {
    nombre: "Patricio",
    edad: 31,
    alias: "Pato",
    habilidades:{
        poder: 340,
        velocidad: 60
    }
}
const persona2 = {
    nombre: "Tutty",
    edad: 23,
    alias: "La Tutty",
    habilidades:{
        poder: 320,
        velocidad: 70
    }
}

const {nombre, edad, alias, habilidades} = persona;   // Desestructuracion: Para poder llamar individualmente a cada propiedad de un objetos

console.log(habilidades);

const getPersona = ({nombre, edad, alias, habilidades}) => {
    const {poder, velocidad} = habilidades;
    return {
        avenger: alias,
        edad,
        poder,
        velocidad,
    }
}

console.log(getPersona(persona));
console.log(getPersona(persona2));

