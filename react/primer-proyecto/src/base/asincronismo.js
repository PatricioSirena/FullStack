import { getHeroById } from './import-export';

const sumar=(a,b)=>a+b;
const resta=(a,b)=>a-b;

// console.log(sumar(32.44));

// let contador=0;
// setInterval(() => {
//     contador++
//     console.log(contador);
// }, 1000);

// console.log("Hola");


//  Estados de las promesas:
    // -Pendiente
    // -Aceptada
    // -Rechazada

    const promesa = new Promise((resolve,reject)=>{
        // setTimeout((reject) => {
            console.log("Pasaron 2 segundos");
            const heroe = getHeroById(2);
            console.log(heroe);
            resolve(heroe);
            reject("No existe ese heroe")
        // }, 2000);
    }
)

promesa
.then(data=>console.log(data))
.catch(err=>console.log(err))

