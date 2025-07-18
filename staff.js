document.addEventListener("DOMContentLoaded", () => {

    // PUNTATORI
    const navbarImg = document.getElementById("navbar-img")
    const sidebar = document.getElementById("sidebar")
    const staff1 = document.getElementById("staffOneCard")
    const staff2 = document.getElementById("staffTwoCard")
    const staff3 = document.getElementById("staffThreeCard")
    const staff4 = document.getElementById("staffFourCard")
    const staff5 = document.getElementById("staffFiveCard")
    const staff6 = document.getElementById("staffSixCard")
    const staff1Par = document.getElementById("staffOnePar")
    const staff2Par = document.getElementById("staffTwoPar")
    const staff3Par = document.getElementById("staffThreePar")
    const staff4Par = document.getElementById("staffFourPar")
    const staff5Par = document.getElementById("staffFivePar")
    const staff6Par = document.getElementById("staffSixPar")

    // SFRUTTA GLI EVENTI PER MANIPOLARE IL CONTENT DELLE CARDS
    staff1.addEventListener("mouseover", ()=>{
        staff1Par.textContent = "Con noi da 10 anni, ha lavorato in ristoranti stellati prima di unirsi alla nostra cucina."
    })
    staff1.addEventListener("mouseout", ()=>{
        staff1Par.textContent = "Giuseppe, il nostro chef e titolare."
    })

    staff2.addEventListener("mouseover", ()=>{
        staff2Par.textContent = "Giovane ma talentuoso, supporta lo chef con passione e precisione da 2 anni."
    })
    staff2.addEventListener("mouseout", ()=>{
        staff2Par.textContent = "Alessandro, il nostro aiuto-cuoco."
    })

    staff3.addEventListener("mouseover", ()=>{
        staff3Par.textContent = "Professionista dell’accoglienza con oltre 15 anni di esperienza, coordina il servizio con eleganza."
    })
    staff3.addEventListener("mouseout", ()=>{
        staff3Par.textContent = "Gaetano, il nostro responsabile di sala."
    })

    staff4.addEventListener("mouseover", ()=>{
        staff4Par.textContent = "Sempre sorridente, lavora con noi da 3 anni ed è amato da tutti i clienti."
    })
    staff4.addEventListener("mouseout", ()=>{
        staff4Par.textContent = "Marco, uno dei nostri camerieri."
    })

    staff5.addEventListener("mouseover", ()=>{
        staff5Par.textContent = "Entrato da poco nel team, ma si è già distinto per puntualità e cortesia."
    })
    staff5.addEventListener("mouseout", ()=>{
        staff5Par.textContent = "Luigi, il nostro secondo cameriere."
    })

    staff6.addEventListener("mouseover", ()=>{
        staff6Par.textContent = "Esperto impastatore, prepara pizze perfette da più di 8 anni con ricette tradizionali."
    })
    staff6.addEventListener("mouseout", ()=>{
        staff6Par.textContent = "Salvo, il nostro pizzaiolo."
    })

    // AL CLICK DELL'IMG PROFILO FA RUOTARE LA STESSA E FA APPARIRE LA SIDEBAR
    let rotate4 = false

    navbarImg.addEventListener("click", ()=>{
        sidebar.classList.toggle('show');
        if (rotate4 == false) {
            navbarImg.style.transform = "rotate(360deg)"
            rotate4 = true          
        } else {
            navbarImg.style.transform = "rotate(0deg)"
            rotate4 = false
        }
    })
})