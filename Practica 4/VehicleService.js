


const vehicleOnCreate = (model, color, year, inFuncional, brand) => {

    if (!model || !color || !year || !inFuncional || !brand) throw new Error("Tienes que ingresar todos los argumentos para poder ejecutar la función correctamente")

    return {
        modelo      : model,
        color       : color,
        anio        : year,
        esfuncional : inFuncional,
        marca       : brand
    }
}

module.exports = vehicleOnCreate






