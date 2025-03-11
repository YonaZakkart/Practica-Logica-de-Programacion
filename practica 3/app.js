const sumar = require("./sumar");
const readline = require("readline");

const interfazConsola = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

interfazConsola.question("Ingrese el primer número: ", (num1) => {
    interfazConsola.question("Ingrese el segundo número: ", (num2) => {
        
        let numero1 = parseFloat(num1);
        let numero2 = parseFloat(num2);
        console.log(`La suma de ${numero1} y ${numero2} es: ${sumar(numero1, numero2)}`);
    });
 });


