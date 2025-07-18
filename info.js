document.addEventListener("DOMContentLoaded", () => {
    
    // PUNTATORI
    const bookingSection = document.getElementById("booking-section")
    const bookingForm = document.getElementById("booking-form")
    const name = document.getElementById("name")
    const surname = document.getElementById("surname")
    const email = document.getElementById("email")
    const phone = document.getElementById("phone")
    const message = document.getElementById("message")
    const nameError = document.getElementById("name-error")
    const surnameError = document.getElementById("surname-error")
    const mailError = document.getElementById("mail-error")
    const phoneError = document.getElementById("phone-error")
    const messageError = document.getElementById("message-error")
    const navbarImg = document.getElementById("navbar-img")
    const sidebar = document.getElementById("sidebar")

    bookingForm.addEventListener('submit', function(event) {
        // PREVIENE L'INVIO DEI DATI E IL REFRESH DELLA PAGINA
        event.preventDefault();
        // REGOLE DI VALIDAZIONE
        if (name.value.length < 3) {
            nameError.textContent = "Nome troppo breve."
            nameError.style.color = "red"
        }else if (surname.value.length < 3) {
            nameError.textContent = ""
            surnameError.textContent = "Cognome troppo breve."
            surnameError.style.color = "red"
        }else if (email.value.length < 7) {
            surnameError.textContent = ""
            mailError.textContent = "Indirizzo email troppo breve."
            mailError.style.color = "red"
        }else if (phone.value.length < 9) {
            mailError.textContent = ""
            phoneError.textContent = "Numero di telefono troppo breve."
            phoneError.style.color = "red"
        }else if (message.value.length > 0 && message.value.length < 4) {
            phoneError.textContent = ""
            messageError.textContent = "Testo del messaggio troppo breve."
            messageError.style.color = "red"
            // INVIO MODULO PER SUCCESSO
        }else {
            bookingSection.innerHTML = "<h3>Modulo inviato correttamente. Ti risponderemo il prima possibile all'indirizzo email che ci hai fornito. Grazie per averci contattati!</h3>"
            bookingSection.style.display = "flex"
            bookingSection.style.justifyContent = "center"
            bookingSection.style.alignItems = "center"
        }
    });

    // AL CLICK DELL'IMG PROFILO FA RUOTARE LA STESSA E FA APPARIRE LA SIDEBAR
    let rotate3 = false

    navbarImg.addEventListener("click", ()=>{
        sidebar.classList.toggle('show');
        if (rotate3 == false) {
            navbarImg.style.transform = "rotate(360deg)"
            rotate3 = true          
        } else {
            navbarImg.style.transform = "rotate(0deg)"
            rotate3 = false
        }
    })
    
    // DEFINISCE UNA FUNZIONE ASINCRONA
    async function fetchActualWeather() {
        const apikey = "f448ee69bc0430d77b065c4db4d34f0C"
        const city = "carini"
        try {
            // EFFETTUA UNA RICHIESTA HTTP ALL'API DI OPENWEATHER E ATTENDE LA RISPOSTA (AWAIT)
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apikey + "&units=metric" + "&lang=it")
            // CONVERTE LA RESPONSE IN JSON
            const weatherData = await response.json()
            return weatherData
            // MOSTRA EVENTUALI ERRORI
        } catch (error) {
            alert("Errore nella richiesta: " + error)
        }
    }
    
    // RECUPERA I DATI METEO ASPETTANDO LA RISPOSTA PRIMA DI CONTINUARE
    async function showInfoWeather() {
        const data = await fetchActualWeather()
        
        // PUNTATORI
        const city = document.getElementById("city")
        const temp = document.getElementById("temp")
        const conditions = document.getElementById("conditions")
        const wind = document.getElementById("wind")

        // CREA ELEMENTI QUANDO E' TUTTO PRONTO
        const tempPar = document.createElement("p")
        const conditionsPar = document.createElement("p")
        const windPar = document.createElement("p")
        const icon = document.createElement("img")
        
        // MANIPOLAZIONE DEL DOM CON I DATI OTTENUTI
        city.textContent = "Meteo di " + data.name
        
        tempPar.textContent = "Temperatura percepita: " + Math.ceil(data.main.feels_like) + " °C"
        
        conditionsPar.textContent = "Condizioni meteo: " + data.weather[0].description
        
        windPar.textContent = "Vento: " + Math.ceil(data.wind.speed * 3.6) + " km/h"
        
        icon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        icon.alt = "Icona meteo" + data.weather[0].description
        
        temp.appendChild(tempPar)
        conditions.appendChild(conditionsPar)
        conditions.appendChild(icon)
        
        if (data.weather[0].icon == "09d" || data.weather[0].icon == "10d" || data.weather[0].icon == "11d") {
            const rainWarning = document.createElement("p")
            rainWarning.textContent = "PORTA L'OMBRELLO!"
            conditions.appendChild(rainWarning)
        }

        wind.appendChild(windPar)
        if (Math.ceil(data.wind.speed * 3.6) > 49) {
            const windWarning = document.createElement("p")
            windWarning.textContent = "ATTENZIONE AL VENTO!"
            conditions.appendChild(windWarning)
        }
        
    }
    
    showInfoWeather();
});
