
const fs = require('fs');
const mongo = "./mongo.json";

const deleteUserById = (id) => {

    try {

        fs.readFile(mongo, 'utf-8', (error, data) => {
            if (error) throw new Error(`${error}`);

            const deleteUser = JSON.parse(data)


            const userDel = deleteUser.ussers.filter(user => user.id !== id);

            
            if (userDel.length >= 0) {
                const newData = {
                    ussers: userDel 
                };

               
                fs.writeFile(mongo, JSON.stringify(newData, null, 2), (error) => {
                    if (error) throw new Error(`${error}`);
                    console.log("Usuario eliminado exitosamente");
                });
            } else {
                console.log("No se encontró el usuario con el ID proporcionado");
            }
        });
    } catch (error) {
        throw new Error (`${error}`);
    }
}

module.exports = deleteUserById;