
const { log } = require('console');
const fs = require('fs');

const mongoDB = "./mongo.json";   

const createUser = (newUser) => {
    try { 

        fs.readFile(mongoDB, 'utf-8', (error, data) => {

            if (error) throw new Error(`${error}`);
            
            const usersOBJ = JSON.parse(data);

            usersOBJ.ussers.push(newUser);
            

            fs.writeFile(mongoDB, JSON.stringify(usersOBJ, null, 2 ), (error) => {
                if (error) throw new Error(`${error}`);
                console.log("El usuario ha sido creado exitosamente");

            }
            )

        })

    } catch (error) {
        throw new Error (`${error}`);
    }
}

module.exports = createUser;