let dom = document.querySelector(".container")
let url = 'https://jsonplaceholder.typicode.com/photos';
let miUrl = "https://apiluigui-production-6f3b.up.railway.app/";

fetch(url)
.then(data=>data.json())
.then(result=>{
    let nuevoArray = result.filter(function (obj, index) {
        if (index < 5 ) {
            return obj;
        }        
    })
    nuevoArray.map((o,i)=>dom.innerHTML += `<img id=${(i+1).toString()} src="${o.thumbnailUrl}" alt="">`)
    document.getElementById(1).style.borderRadius="20px"
})
.catch()

document.getElementById(1).style.borderRadius="20px"