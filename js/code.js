let homeContainer = document.querySelector("#home-container");
let aboutContainer = document.querySelector("#about-container");
let pAbout = document.querySelector(".p-about");
let lenguageChange = document.querySelector(".lenguage-change");

window.addEventListener("load", welcomeHome);

function welcomeHome(){
    let helloName = document.createElement("p");
    helloName.innerHTML = "Hola!, mi nombre es...";
    homeContainer.appendChild(helloName);

    let nameComplete = document.createElement("h1");
    nameComplete.innerHTML = "Julian Avila";
    homeContainer.appendChild(nameComplete);
    
    let professionDescription = document.createElement("h3");
    professionDescription.innerHTML = "Desarrollador front-end";
    homeContainer.appendChild(professionDescription);

    let buttonWelcome = document.createElement("button");
    buttonWelcome.innerHTML = "Ver mi trabajo";
    buttonWelcome.classList.add("btn-welcome");
    homeContainer.appendChild(buttonWelcome);
}

pAbout.innerHTML = "Soy tecnólogo en electronica y telecomunicaciones, apasionado por el desarrollo web, mi objetivo es crear experiencias digitales cautivadoras y funcionales.";
aboutContainer.appendChild(pAbout);

