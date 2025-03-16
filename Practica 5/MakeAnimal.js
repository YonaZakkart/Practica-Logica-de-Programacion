
const LeerLinea = require("readline") 
const AnimalFactory = require("./AnimalFactory")

const InterfazConsola = LeerLinea.createInterface({
    input: process.stdin,
    output: process.stdout
})

InterfazConsola.question("Ingrese el nombre del animal : ", (name) => {

    InterfazConsola.question("Ingrese la edad del animal :", (age) => {

        InterfazConsola.question("Ingrese el color del animal :", (color) => {

            InterfazConsola.question("Ingrese la raza del animal :", (race) => {

                console.log(AnimalFactory(name, age, color, race))

                InterfazConsola.close()

            })

        })

    })

})