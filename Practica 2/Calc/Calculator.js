
const readline = require('readline');

const Sumar = require("./Suma");
const Restar = require("./Resta");

const interfazConsola = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazConsola.question("porfavor ingrese el primer numero ", (numero1) => {
    interfazConsola.question("porfavor ingrese el segundo numero ", (numero2) => {
        interfazConsola.question("porfavor ingrese su operacion\n1-Sumar\n2-Restar ", (operacion) => {
            let n1 = parseInt(numero1);
            let n2 = parseInt(numero2);

            if (parseInt(operacion) == 1) {
                console.log(`Su suma es ${Sumar(n1, n2)}`);
            } else if (parseInt(operacion) == 2) {
                console.log(`Su resta es ${Restar(n1, n2)}`);
            } else if (operacion === '3') {
                console.log("¡Hasta luego!");
                interfazConsola.close();
            } else {
                console.log("Opción inválida");
                calcular();
            }
        });
    });
});

