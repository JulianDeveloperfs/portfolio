let homeContainer = document.querySelector("#home-container");
let aboutContainer = document.querySelector("#about-container");
let pAbout = document.querySelector(".p-about");
let lenguageChange = document.querySelector(".lenguage-change");
let homeNav = document.querySelector(".nav-bar__li-home");
let aboutNav = document.querySelector(".nav-bar__li-about");
let proyectsNav = document.querySelector(".nav-bar__li-proyects");
let contactNav = document.querySelector(".nav-bar__li-contact");
let buttonWelcome = document.createElement("button");

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

    buttonWelcome.innerHTML = "Ver mi trabajo";
    buttonWelcome.classList.add("btn-welcome");
    homeContainer.appendChild(buttonWelcome);

}

pAbout.innerHTML = "Soy tecnólogo en electronica y telecomunicaciones, apasionado por el desarrollo web, mi objetivo es crear experiencias digitales cautivadoras y funcionales.";
aboutContainer.appendChild(pAbout);

function toHome(){
    const destino = document.querySelector("#home-container");
    
    destino.scrollIntoView({
      behavior: "smooth", 
      block: "start" 
    });
  };

  function toAbout(){
    const destino = document.querySelector("#about-container");
    
    destino.scrollIntoView({
      behavior: "smooth", 
      block: "start" 
    });
  };

  function toProyects(){
    const destino = document.querySelector("#proyects-container");

    destino.scrollIntoView({
        behavior: "smooth", 
        block: "start" 
      });
    };

  function toContact(){
    const destino = document.querySelector("#contact-container");
    
    destino.scrollIntoView({
      behavior: "smooth", 
      block: "start" 
    });
  };
homeNav.addEventListener("click",toHome);

aboutNav.addEventListener("click", toAbout);

proyectsNav.addEventListener("click", toProyects);

contactNav.addEventListener("click", toContact);

buttonWelcome.addEventListener("click", toAbout);

