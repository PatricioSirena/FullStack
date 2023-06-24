// ------------- Tarea 1 -------------- //

// let uno = 23
// let dos = 16
// let tres = 6

// if (uno > dos) {
//     if (uno > tres)
//     console.log(uno +" es el mayor");
//     else
//     console.log(tres +" es el mayor");
// } else {
//     if (dos > tres)
//     console.log(dos +" es el mayor");
//     else
//     console.log(tres +" es el mayor");
// }

// if (uno < dos) {
//     if (uno < tres)
//     console.log(uno +" es el menor");
//     else
//     console.log(tres +" es el menor");
// } else {
//     if (dos < tres)
//     console.log(dos +" es el menor");
//     else
//     console.log(tres +" es el menor");
// }

// console.log(Math.sqrt(dos));


// ------------- Tarea 2 -------------- //

// var a = prompt("introduzca un numero");

// var b = prompt("introduzca otro numero");
// var z = parseInt(a) + parseInt(b)
// console.log("El resultado es: "+z)


// ------------- Tarea 3 ------------- //

let uno = parseInt(prompt("Ingresa un numero"));
let dos = parseInt(prompt("Ingresa otr numero"));

suma = uno + dos;
resta = dos - uno;
multip = uno * dos;

if (uno > dos){
    console.log("Uno es mayor que dos, la suma es: "+ suma);
}else if(uno < dos){
    console.log("Uno es menor que dos, la resta es: "+ resta);
}else{
    console.log("Los numeros son iguales, la multiplicacion es: "+ multip);
}


