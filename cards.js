const IMAGE_URL = 'https://placehold.co/200';
const IMAGE_CONTAINER = document.querySelector('.img-container');
const INFO_CONTAINER = document.querySelector('.info-container');

//tarjeta de usuario
const DATA = {
    id: 1,
    user_name: 'User Name',
    description: 'carpe diem',
    age: 28,
}

//imagen
const image = document.createElement('img');
image.src = IMAGE_URL;
image.alt = 'User profile photo';
console.log(image);


//informacion de usuario
const user_name = document.createElement('h3');
const user_desc = document.createElement('p');
const user_age =document.createElement('p');

//element + data
user_name.innerHTML = DATA.user_name;
user_desc.innerHTML= DATA.description;
user_age.innerHTML = DATA.age;
console.log(user_name, user_desc, user_age);

//renderizar elementos
IMAGE_CONTAINER.append(image);
INFO_CONTAINER.append(user_name, user_desc, user_age)