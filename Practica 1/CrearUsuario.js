const readline = require('readline');

const interfazConsola = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interfazConsola.question("Por favor ingrese su nombre completo: ", (nombre) => {
    if (nombre.length < 3) {
        console.log("Por favor ingrese un nombre valido de al menos 3 caracteres");
        interfazConsola.close();
        return;
    }
    interfazConsola.question("Por favor ingrese su correo electronico: ", (correo) => {
        if (!correo.includes("@")) {
            console.log("Por favor ingrese un correo electronico valido");
            interfazConsola.close();
            return;
        }

        interfazConsola.question("Por favor ingrese su contrasenia: ", (password) => {
            if (password.length < 8) {
                console.log("La contrasenia debe tener al menos 8 caracteres");
                interfazConsola.close();
                return;
            }
            
            console.log(`Datos ingresados correctamente: 
            Nombre: ${nombre}
            Correo: ${correo}
            Contrasenia: ${password}`);
            interfazConsola.close();
        });
    });
});