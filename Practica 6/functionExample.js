const makeComputer = (CPU, RAM, GPU, PowerFount, Gabinete, Price) => {
    try {
        
        const computer = {
            CPUType        : CPU,
            RAMType        : RAM,
            GPUType        : GPU,
            PowerFountType : PowerFount,
            GabineteType   : Gabinete,
            PriceType      : Price,
        }
        return computer

    } catch (error) {
        throw new Error(`${error}`);
    }
};

console.log(makeComputer("AMD Ryzen 9 9950X","64GB","NVIDIA GeForce RTX 5090", "600w 80 plus", "Thermaltake", "$1500"));