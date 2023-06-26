let computadora = ['teclado','monitor','mouse','gabinete'];


// Desestructuracion del array
let [c0,c1,c2,c3] = computadora;
console.log(c2);

if (computadora.includes('gabinete')) {
    console.log('La comoutadora esta lista');
}else{
    console.log('Todavia no esta completa');
}

//  Para acceder a un elemento del array en particular
console.log(computadora[3]);

// Para saber cuantos elementos tiene el array
console.log(computadora.length);

//  Para mostrar en consola el ultimo elemento del array
console.log('El ultimo elemento de la computadora es: ', computadora[computadora.length -1]);

//  Para agregar elementos al array
computadora.push('disco solido');
console.log(computadora);

//  Para eliminar el ultimo elemento del array
computadora.pop();
console.log(computadora);

// Para recorrer el array
for (let i = 0; i < computadora.length; i++) {
    console.log(computadora[i]);
}


