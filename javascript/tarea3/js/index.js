class Paint {
    constructor(pizarra, pinceles, tamanio, t) {
        this.pizarra = pizarra;
        this.pinceles = pinceles;
        this.tamanio = tamanio;
        this.texto = t;
    }
}

let pizarra = {
    height: "529px",
    width: "672px",
    position: "absolute",
    left: "23px",
    top: "17px",
    background: "black",
};

let pincel = {
    height: "10px",
    width: "10px",
    position: "absolute",
    left: "768px",
    top: "53px",
    background: "blue",
};

let tamanio = [5, 10, 15, 20, 25];
let text = [
    "Seleccioná un color",
    "Seleccionpá el tamaño",
    "Seleccioná el evento",
];
let nuestraPaint = new Paint(pizarra, pincel, tamanio, text);

function crearElemnento(id) {
    document.querySelector(".pizarra").innerHTML += `<div id="${id}"></div>`;
}
function agregarAtributos(pepe, obj) {
    let ele = document.getElementById(pepe);
    ele.style.height = obj.height;
    ele.style.width = obj.width;
    ele.style.position = obj.position;
    ele.style.left = obj.left;
    ele.style.top = obj.top;
    ele.style.backgroundColor = obj.background;
}

function eventMove() {
    // alert("Moviendose")
    crearElemnento("pincel");
    agregarAtributos("pincel", nuestraPaint.pinceles);
    // let div = document.querySelector(".pizarra").innerHTML = pincel;

}