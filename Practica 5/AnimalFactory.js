
const AnimalFactory = (name, age, color, race) => {
    try {
                // || significa "o"
                // ! significa que no se ha enviado esa info.
        if (!name || !age || !color || !race) return "Para poder crear un animal es necesario ingresar todos los datos que se le han solicitado."

        const newAnimal = {
            nombre : name,
            edad   : age,
            color  : color,
            raza   : race,
        }

        return newAnimal

    } catch (error) {
        throw new Error(` Ha ocurrido un error al crear el animal : ${error}`);
        // console.log(error);
    }
}

module.exports = AnimalFactory