


export const openCartEvent = () => {
    try {

        const modal = document.createElement("div")
        

        openCart.addEventListener("click", () => {
            const modalEvent = document.getElementById("modalCart")
            modalEvent.className = (".open-cart")
        })

        const closeModal = document.getElementById("closeModal")
        
        closeModal.addEventListener("click", () => {
            const modalEvent = document.getElementById("modalCart")
            modalEvent.className = (".close-cart")

            modalEvent.textContent = ""
        })
        
    } catch (error) {
        throw new Error(`$(error)`);
    }
}

