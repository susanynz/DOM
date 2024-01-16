//
//console.log("hello bonis")

const btn =document.getElementById("btn-1")

//Atributo
console.log(typeof btn);


//DATA EN PANTALLA(DATA DISPLAYED)
console.log(btn.innerHTML);

btn.addEventListener("click", (event) => 
{console.log("Holis");
})

document.getElementById("input-1").addEventListener("input", (e) => {
    document.getElementById("username").innerHTML = e.target.value;
    document.getElementsByClassName('user-info').innerHTML= e.target.value;
})


const input = document.getElementById('input-1')

input.addEventListener("input", (e) => {
console.log(e.target.value);
})

