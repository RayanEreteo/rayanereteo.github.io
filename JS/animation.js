//MENU
const menu = document.querySelector(".menu-closed");
const exitMenu = document.querySelector(".quit-menu");
const exitMenuMobile = document.querySelector(".quit-menu-mobile");
const menuAll = document.querySelector(".menu-button");
const menuButton = document.querySelector("#menu-logo");
const circle = document.querySelector(".circle");
let isMenuOpen = false;

if(circle != null){
    circle.addEventListener("mouseover", () => {
        circle.style.display = "none";
    });
}

menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
})

exitMenu.addEventListener("click", (e) => {
    e.stopPropagation()
    if(isMenuOpen){
        toggleMenu();
    }
});

exitMenuMobile.addEventListener("click", (e) => {
    e.stopPropagation()
    if(isMenuOpen){
        toggleMenu();
    }
});

const toggleMenu = () => {
    if(!isMenuOpen){
        menu.classList.add("menu-open");
        isMenuOpen = true;
        exitMenu.style.zIndex = '98';
        exitMenu.style.background = 'rgba(0,0,0,0.5)';
    }else if(isMenuOpen){
        menu.classList.remove("menu-open")
        isMenuOpen = false;
        exitMenu.style.zIndex = "-1";
        exitMenu.style.background = "rgba(0,0,0,0)";
    }
}

// INDEX

const title = document.querySelector(".title-contenu");
const welcomeMessage = document.querySelector(".main");

const whiteFrame = document.querySelector('.title-frame');

setTimeout(() => {
    whiteFrame.style.display = 'none';
}, 5000)

if(title != null){
    title.addEventListener("animationend", (e) => {
        setTimeout(() => {
        welcomeAppearance();
    }, 2000);
});
}

let welcomeAppearance = () => {
    title.classList.add("title-reverse");
    setTimeout(() => {
        welcomeMessage.style.opacity = 1;
        menuAll.style.opacity = 1;
    }, 1500)
}

// SKILLS

let skillsFrameFront = document.querySelector(".skills-wrapper-main-front");
let skillsFrameBack = document.querySelector(".skills-wrapper-main-back");
const buttonFrontend = document.querySelector("#frontend-button");
const buttonBackend = document.querySelector("#backend-button");

if (skillsFrameFront != null) {
    setTimeout(() => {
    skillsFrameFront.style.opacity = 1;
    }, 1600);
}

if(buttonFrontend != null && buttonBackend != null){
    buttonFrontend.addEventListener('click', () => {
    if(buttonFrontend.classList.contains('unselected')){
        buttonFrontend.classList.remove('unselected')
        buttonFrontend.classList.add('selected');

        buttonBackend.classList.remove("selected");
        buttonBackend.classList.add("unselected");       
        skillsFrameFront.style.display = "block";
        skillsFrameBack.style.display = 'none';
    }
})

    buttonBackend.addEventListener("click", () => {
        if (buttonBackend.classList.contains("unselected")) {
            buttonBackend.classList.remove("unselected");
            buttonBackend.classList.add("selected");

            buttonFrontend.classList.remove("selected");
            buttonFrontend.classList.add("unselected");
            skillsFrameFront.style.display = 'none'
            skillsFrameBack.style.display = 'block'
        }
});
}

// PROJECT

let projects = document.getElementsByClassName('project');

let index = -1;
setTimeout(() => {
    let timer = setInterval(() => {
        if(projects != null){
            if (index <= 2) {
                index++;
                projects[index].classList.add("project-animated");
            } else {
                clearInterval(timer);
            }
    }
}, 500)
}, 2000);