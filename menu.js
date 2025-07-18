document.addEventListener("DOMContentLoaded", () => {
    
    // PUNTATORI    
    const appetizers = document.getElementById("appetizers")
    const mainCourses = document.getElementById("main-courses")
    const secondCourses = document.getElementById("second-courses")
    const salads = document.getElementById("salads")
    const sandwiches = document.getElementById("sandwiches")
    const pizzas = document.getElementById("pizzas")
    const specialPizzas = document.getElementById("special-pizzas")
    const navbarImg = document.getElementById("navbar-img")
    const sidebar = document.getElementById("sidebar")
    const appetizersTitle = document.getElementById("appetizers-title")
    const mainCoursesTitle = document.getElementById("maincourses-title")
    const secondCoursesTitle = document.getElementById("secondcourses-title")
    const saladsTitle = document.getElementById("salads-title")
    const sandwichesTitle = document.getElementById("sandwiches-title")
    const pizzasTitle = document.getElementById("pizzas-title")
    const specialPizzasTitle = document.getElementById("specialpizzas-title")
    
    // Legge il file menu.json e ottiene i dati come oggetto JS
    fetch("./menu.json").then((response)=> response.json()).then((data)=> {
        
        const appetizersArray = [];
        const mainCoursesArray = [];
        const secondCoursesArray = [];
        const saladsArray = [];
        const sandwichesArray = [];
        const pizzasArray = [];
        const specialPizzasArray = [];
        
        data.forEach(dish => {
            // CREA UN PAR PER OGNI ELEMENTO NEL JSON
            const p = document.createElement("p");
            p.textContent = dish.name + ": " + dish.price + "€";
            // AGGIUNGE OGNI PAR CREATO ALL'ARRAY CORRISPONDENTE PER CATEGORIA
            if (dish.category == "Antipasti") {
                appetizersArray.push(p);
            } else if (dish.category == "Primi") {
                mainCoursesArray.push(p);
            } else if (dish.category == "Secondi") {
                secondCoursesArray.push(p);
            } else if (dish.category == "Insalate") {
                saladsArray.push(p);
            } else if (dish.category == "Panini") {
                sandwichesArray.push(p);
            } else if (dish.category == "Pizze") {
                pizzasArray.push(p);
            } else {
                specialPizzasArray.push(p);
            }
        });
        
        // MOSTRA O NASCONDE GLI ANTIPASTI AL CLICK SUL TITOLO
        appetizersTitle.addEventListener("click", () => {
            if (appetizers.children.length === 0) {
                appetizersArray.forEach(p => appetizers.appendChild(p));
            } else {
                appetizers.innerHTML = "";
            }
        });
        
        // MOSTRA O NASCONDE I PRIMI AL CLICK SUL TITOLO
        mainCoursesTitle.addEventListener("click", () => {
            if (mainCourses.children.length === 0) {
                mainCoursesArray.forEach(p => mainCourses.appendChild(p));
            } else {
                mainCourses.innerHTML = "";
            }
        });
        
        // MOSTRA O NASCONDE I SECONDI AL CLICK SUL TITOLO
        secondCoursesTitle.addEventListener("click", () => {
            if (secondCourses.children.length === 0) {
                secondCoursesArray.forEach(p => secondCourses.appendChild(p));
            } else {
                secondCourses.innerHTML = "";
            }
        });
        
        // MOSTRA O NASCONDE LE INSALATE AL CLICK SUL TITOLO
        saladsTitle.addEventListener("click", () => {
            if (salads.children.length === 0) {
                saladsArray.forEach(p => salads.appendChild(p));
            } else {
                salads.innerHTML = "";
            }
        });
        
        // MOSTRA O NASCONDE I PANINI AL CLICK SUL TITOLO
        sandwichesTitle.addEventListener("click", () => {
            if (sandwiches.children.length === 0) {
                sandwichesArray.forEach(p => sandwiches.appendChild(p));
            } else {
                sandwiches.innerHTML = "";
            }
        });
        
        // MOSTRA O NASCONDE LE PIZZE AL CLICK SUL TITOLO
        pizzasTitle.addEventListener("click", () => {
            if (pizzas.children.length === 0) {
                pizzasArray.forEach(p => pizzas.appendChild(p));
            } else {
                pizzas.innerHTML = "";
            }
        });
        
        // MOSTRA O NASCONDE LE PIZZE SPECIALI AL CLICK SUL TITOLO
        specialPizzasTitle.addEventListener("click", () => {
            if (specialPizzas.children.length === 0) {
                specialPizzasArray.forEach(p => specialPizzas.appendChild(p));
            } else {
                specialPizzas.innerHTML = "";
            }
        });
    })
    
    // AL CLICK DELL'IMG PROFILO FA RUOTARE LA STESSA E FA APPARIRE LA SIDEBAR
    let rotate2 = false
    
    navbarImg.addEventListener("click", ()=>{
        sidebar.classList.toggle('show');
        if (rotate2 == false) {
            navbarImg.style.transform = "rotate(360deg)"
            rotate2 = true          
        } else {
            navbarImg.style.transform = "rotate(0deg)"
            rotate2 = false
        }
    })
});