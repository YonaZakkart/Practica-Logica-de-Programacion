// let name = "Yonathan";      //String - Cadena de texto
// let age = 20;       // Dato numerico o decimal (Float)
// let number = 25.4;  // float o double


// // en linea o no esta en linea
// let isActive = true     //true o false
// inActive = false

// if(isActive == true){
//     return 'En linea'
// } else {
//     return 'Ultima vez...'
// }

// const siEstaActivo = () => {
//     if(isActive == true){
//         return 'En linea'
//     } else {
//         return 'Ultima vez...'
//     }
// }
// console.log(siEstaActivo());



const fruits = [
    "apple",
    "orange",
    "uva",
    1
]

fruits.forEach(element => {
    console.log(element);
});

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

const UserInfo = {
    name: "Yonathan",
    age: 20,
    isActive: true,
    favoriteColor : ["Darkblue", "Yellow"]
}

const {name, age, isActive, favoriteColor} = UserInfo;
console.log(name);
console.log(age);
console.log(isActive);
favoriteColor.forEach(Element => {
    console.log(Element);
});