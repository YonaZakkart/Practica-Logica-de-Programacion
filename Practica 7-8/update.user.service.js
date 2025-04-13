
const fs = require('fs');
const mongo = "./mongo.json";

const updateUser = (id, userNewData) => {
    try {
        fs.readFile(mongo, 'utf-8', (error, data) => {
            if (error) throw new Error(`${error}`);

            const usersOBJ = JSON.parse(data);

            const userUpdate = usersOBJ.ussers.find(usser => usser.id === id);
            
            if (userUpdate) {
                userUpdate.name = userNewData.name;
                userUpdate.lastname = userNewData.lastname;
                userUpdate.dui = userNewData.dui;
                userUpdate.correo = userNewData.correo;


                

                fs.writeFile(mongo, JSON.stringify(usersOBJ, null, 2), (error) => {
                    if (error) throw new Error(`${error}`);
                    console.log("El usuario ha sido actualizado exitosamente");
                    
                })
            
            }
        });
    } catch (error) {
        throw new Error (`${error}`);
    }

}

module.exports = updateUser;