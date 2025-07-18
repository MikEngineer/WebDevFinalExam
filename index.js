document.addEventListener("DOMContentLoaded", () => {
    
    // PUNTATORI
    const promoOneBtn = document.getElementById("promoOneBtn")
    const promoTwoBtn = document.getElementById("promoTwoBtn")
    const promoThreeBtn = document.getElementById("promoThreeBtn")
    const promoOnePar = document.getElementById("promoOnePar")
    const promoTwoPar = document.getElementById("promoTwoPar")
    const promoThreePar = document.getElementById("promoThreePar")
    const navbarImg = document.getElementById("navbar-img")
    const sidebar = document.getElementById("sidebar")
    
    // AL CLICK DEL BTN TRASFORMA IL TESTO DELLA CARD E DEL BTN STESSO
    check1 = false
    
    promoOneBtn.addEventListener("click", ()=> {
        promoOnePar.textContent = ""
        if (check1 == false) {
            const backCard = document.createElement("p")
            backCard.innerHTML = 'La promozione "Menù famiglia" prevede:<br>- 1 pizza margherita familiare<br>- 1 coca-cola in bottiglia<br>- 1 antipasto caldo<br>al prezzo di soli 10€'
            promoOnePar.appendChild(backCard)
            promoOneBtn.textContent = "Nascondi"
            check1 = true
        }else {
            promoOnePar.innerHTML = 'Promo "Menù famiglia"'
            promoOneBtn.textContent = "Scopri di più"
            check1 = false
        }
    })
    
    // AL CLICK DEL BTN TRASFORMA IL TESTO DELLA CARD E DEL BTN STESSO
    check2 = false
    
    promoTwoBtn.addEventListener("click", ()=> {
        promoTwoPar.textContent = ""
        if (check2 == false) {
            const backCard = document.createElement("p")
            backCard.innerHTML = 'La promozione "Menù singolo" prevede:<br>- 1 pizza margherita singola<br>- 1 bibita analcolica in lattina<br>- 1 porzione di patatine<br>al prezzo di soli 5€'
            promoTwoPar.appendChild(backCard)
            promoTwoBtn.textContent = "Nascondi"
            check2 = true
        }else {
            promoTwoPar.innerHTML = 'Promo "Menù singolo"'
            promoTwoBtn.textContent = "Scopri di più"
            check2 = false
        }
    })
    
    // AL CLICK DEL BTN TRASFORMA IL TESTO DELLA CARD E DEL BTN STESSO
    check3 = false
    
    promoThreeBtn.addEventListener("click", ()=> {
        promoThreePar.textContent = ""
        if (check3 == false) {
            const backCard = document.createElement("p")
            backCard.innerHTML = 'La promozione "Menù panino" prevede:<br>- 1 panino classico<br>- 1 bibita analcolica in lattina<br>al prezzo di soli 3€'
            promoThreePar.appendChild(backCard)
            promoThreeBtn.textContent = "Nascondi"
            check3 = true
        }else {
            promoThreePar.innerHTML = 'Promo "Menù panino"'
            promoThreeBtn.textContent = "Scopri di più"
            check3 = false
        }
    })

    // AL CLICK DELL'IMG PROFILO FA RUOTARE LA STESSA E FA APPARIRE LA SIDEBAR
    let rotate = false

    navbarImg.addEventListener("click", ()=>{
        sidebar.classList.toggle('show');
        if (rotate == false) {
            navbarImg.style.transform = "rotate(360deg)"
            rotate = true          
        } else {
            navbarImg.style.transform = "rotate(0deg)"
            rotate = false
        }
    })
});
