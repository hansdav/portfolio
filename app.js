const slideButtons = document.querySelectorAll("[data-carousel-button]")

const textContainer = document.querySelector(".text-container")
const aboutProgramming = document.querySelector(".programming-text")
const aboutLanguages = document.querySelector(".languages-text")
const aboutCareer = document.querySelector(".career-text")
const aboutGaming = document.querySelector(".gaming-text")

const progButton = document.querySelector("#programming-btn")
const languagesButton = document.querySelector("#languages-btn")
const careerButton = document.querySelector("#career-btn")
const gamingButton = document.querySelector("#gaming-btn")

//functions for buttons re: about me //

progButton.addEventListener("click", function() {
    clearText();
    textContainer.appendChild(aboutProgramming)
});

languagesButton.addEventListener("click", function() {
    clearText();
    textContainer.appendChild(aboutLanguages)
});

gamingButton.addEventListener("click", function() {
    clearText();
    textContainer.appendChild(aboutGaming)
});

//function that clears the about me text//

function clearText() {
    while (textContainer.firstChild) {
        textContainer.replaceChildren();
    }
}

//project slider carousel function//

slideButtons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

