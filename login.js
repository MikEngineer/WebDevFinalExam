document.addEventListener("DOMContentLoaded", () => {

    // PUNTATORI
    const username = document.getElementById("login-email")
    const password = document.getElementById("password")
    const loginForm = document.getElementById("login-form")
    const loginTitle = document.getElementById("login-title")
    const loginSection = document.getElementById("login-section")
    const navbarImg = document.getElementById("navbar-img")
    const sidebar = document.getElementById("sidebar")
    const loginLink = document.getElementById("login-link")
    const loginLinkSide = document.getElementById("login-link-side")
    const emailError = document.getElementById("email-error")
    const passwordError = document.getElementById("password-error")
    const loggedSection = document.getElementById("logged-section")
    
    loginForm.addEventListener('submit', function(event) {
        // IMPEDISCE IL COMPORTAMENTO STANDARD DEL FORM
        event.preventDefault();
        // MOSTRA LA PAGINA PROFILO SE LE CREDENZIALI SONO CORRETTE
        if (username.value === "test.user@email.com" && password.value === "Password") {
            navbarImg.src = "logged.png"
            loginLink.innerHTML = '<a href="/login.html">Logout</a>'
            loginLinkSide.innerHTML = '<a href="/login.html">Logout</a>'
            loginTitle.textContent = "Benvenut@, " + username.value
            loggedSection.style.height = "500px"
            loginSection.style.display = "none"
            loggedSection.style.display = "block"
        // ERRORI CREDENZIALI ERRATE
        } else if (username.value !== "test.user@email.com" && password.value !== "Password") {
            emailError.textContent = "Credenziali errate. Riprova!"
            emailError.style.color = "red"
            passwordError.textContent = "Credenziali errate. Riprova!"
            passwordError.style.color = "red"
        } else if (password.value !== "Password") {
            emailError.textContent = ""
            passwordError.textContent = "Password errata. Riprova!"
            passwordError.style.color = "red"
        }else if (username.value !== "test.user@email.com") {
            passwordError.textContent = ""
            emailError.textContent = "Email errata. Riprova!"
            emailError.style.color = "red"
        }else {
            alert("Qualcosa è andato storto. Aggiorna la pagina e riprova!")
        }
    });
    
    // AL CLICK DELL'IMG PROFILO FA RUOTARE LA STESSA E FA APPARIRE LA SIDEBAR
    let rotate5 = false

    navbarImg.addEventListener("click", ()=>{
        sidebar.classList.toggle('show');
        if (rotate5 == false) {
            navbarImg.style.transform = "rotate(360deg)"
            rotate5 = true          
        } else {
            navbarImg.style.transform = "rotate(0deg)"
            rotate5 = false
        }
    })
    
});
