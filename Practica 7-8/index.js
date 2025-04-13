
const consoleInterface = require("./console.service");
const createDatabase = require("./create.db.service");
const createUser = require("./create.user.service");
const {v4: uuid} = require("uuid");
const updatUser = require("./update.user.service");
const deleteUserById = require("./delete.user.service");
const showUsers = require("./show.users.service");


const main = () => {
    try {
        consoleInterface.question("Por favor ingrese una opción\n1- Crear una base de datos\n2- Crear un usuario \n3- actualizar usuario mediante su ID\n4- Eliminar un usuario mediante su ID\n5- Ver todos los usuarios\n", (option) => {

            switch (parseInt(option)) {

                case 1:
                    createDatabase()

                    setTimeout(() => {

                        main()
                    } , 3000)
                break;

                case 2:
                    consoleInterface.question("Por favor ingrese el nombre del usuario\n", (nombre) => {
                        consoleInterface.question("Por favor ingrese el apellido del usuario\n", (apellido) => {
                            consoleInterface.question("Por favor ingrese el DUI del usuario\n", (dui) => {
                                consoleInterface.question("Por favor ingrese el Correo Electronico del usuario\n", (correo) => {
                                    
                                    const newUser = {
                                        id : uuid(),
                                        name :  nombre,
                                        lastname :  apellido,
                                        dui:    dui,
                                        correo: correo
                                    }

                                        createUser(newUser)
                                            
                                        setTimeout(() => {
                                                
                                            main()
                                        }, 3000)
                                })
                            })
                        })
                    })

                break;

                case 3:
                    consoleInterface.question("Por favor ingrese el ID del usuario a actualizar\n", (id) => {
                        consoleInterface.question("Por favor ingrese el nombre del usuario\n", (nombre) => {
                            consoleInterface.question("Por favor ingrese el apellido del usuario\n", (apellido) => {
                                consoleInterface.question("Por favor ingrese el DUI del usuario\n", (dui) => {
                                    consoleInterface.question("Por favor ingrese el Correo Electronico del usuario\n", (correo) => {
                                        
                                        const newData = {
 
                                            name :  nombre,
                                            lastname :  apellido,
                                            dui:    dui,
                                            correo: correo
                                        }

                                        updatUser(id, newData)

                                        setTimeout(() => {
                                                
                                            main()
                                        }, 3000)
                                    })
                                })
                            })
                        })
                    })
                break;

                case 4:
                    consoleInterface.question("Por favor ingrese el ID del usuario a eliminar\n", (id) => {

                        deleteUserById(id)

                        setTimeout(() => {
                                                
                            main()
                        }, 3000)
                    })
                break;

            default:
                break;

            case 5:
                showUsers()

                setTimeout(() => {
                                                
                    main()
                }, 3000)
                break;
            }

        })

    } catch (error) {
        throw new Error (`${error}`);
    }
}

main()