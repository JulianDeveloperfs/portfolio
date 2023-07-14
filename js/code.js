let homeContainer = document.querySelector("#home-container");
let pAbout = document.querySelector(".p-about");
let aboutContainer = document.querySelector("#about-container");
let navBar = document.querySelector(".nav-bar__container");

let languageChange = document.querySelector(".lenguage-change");
let homeNav = document.querySelector(".nav-bar__li-home");
let aboutNav = document.querySelector(".nav-bar__li-about");
let proyectsNav = document.querySelector(".nav-bar__li-proyects");
let contactNav = document.querySelector(".nav-bar__li-contact");
let buttonWelcome = document.createElement("button");
let navBarOffsetTop = navBar.offsetTop;
let cvButton =document.querySelector('.cv');
let proyectOne= document.querySelector('.gallery-img__one');
let proyectTwo= document.querySelector('.gallery-img__two');
let proyectThree= document.querySelector('.gallery-img__three');
let proyectFour= document.querySelector('.gallery-img__four');
let socialIcon = document.querySelector('.nav__social-item2');
let socialIcon1 = document.querySelector('.nav__social-item3');
let socialIcon2 = document.querySelector('.nav__social-item4');
let checkButton = document.querySelector('.check');
let id= checkButton.checked;

checkButton.addEventListener('click',lenguageChange)

function lenguageChange(){
  let id= checkButton.checked;
  if (id==true) {
    location.href="/es/index.html";
  } else location.href="../index.html";
}


window.addEventListener("load",function(){
  if (id==true) {
    welcomeHomeEs();
} else welcomeHomeEn(); });

window.addEventListener("scroll", navFixed);

function welcomeHomeEs(){
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

function welcomeHomeEn(){
  let helloName = document.createElement("p");
  helloName.innerHTML = "Hello!, my name is...";
  homeContainer.appendChild(helloName);

  let nameComplete = document.createElement("h1");
  nameComplete.innerHTML = "Julian Avila";
  homeContainer.appendChild(nameComplete);
  
  let professionDescription = document.createElement("h3");
  professionDescription.innerHTML = "Front-End Developer";
  homeContainer.appendChild(professionDescription);

  buttonWelcome.innerHTML = "View my work";
  buttonWelcome.classList.add("btn-welcome");
  homeContainer.appendChild(buttonWelcome);

}

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
  function navFixed (){
    let scrollPosY = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollPosY >= navBarOffsetTop) {
      navBar.classList.add("fixed");
    } else {
      navBar.classList.remove("fixed");
    }
    }


homeNav.addEventListener("click", toHome);

aboutNav.addEventListener("click", toAbout);

proyectsNav.addEventListener("click", toProyects);

contactNav.addEventListener("click", toContact);

buttonWelcome.addEventListener("click", toAbout);

cvButton.addEventListener('click', function() {
  let linkDownload = document.createElement('a');
  linkDownload.href = '/files/Curriculum.pdf';
  linkDownload.download = 'Curriculum.pdf';
  linkDownload.click();
});

proyectOne.addEventListener('click', function () { 
  window.open('https://juliandeveloperfs.github.io/ResponsiveShop/', '_blank');
});

proyectTwo.addEventListener('click', function () { 
  window.open('https://juliandeveloperfs.github.io/videogame-retro/', '_blank');
});

proyectThree.addEventListener('click', function () { 
  window.open('https://juliandeveloperfs.github.io/sports-shop/', '_blank');
});

socialIcon.addEventListener('click', function () {
  window.open('https://www.linkedin.com/in/julian-avila-avila/', '_blank');
});

socialIcon1.addEventListener('click', function () {
  window.open('https://github.com/JulianDeveloperfs', '_blank');
});

socialIcon2.addEventListener('click', function () {
  window.open('https://www.instagram.com/julianbettmusic/', '_blank');
});

