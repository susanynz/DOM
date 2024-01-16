<<<<<<< HEAD
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
    const elements = document.getElementsByClassName('user-info');

    for (let i = 0; i < elements.length; i++) {  // Cambié "lenght" a "length"
        elements[i].innerHTML = e.target.value;
        console.log(elements[i]);  // Corregí la posición de los paréntesis
    }
});
const input = document.getElementById('input-1')

input.addEventListener("input", (e) => {
console.log(e.target.value);
})

=======
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

>>>>>>> 7d5c8597f7a89550ccecf8afa69ec40693c25d4c
