

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});


const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});


const questions = document.querySelectorAll(".faq details");

questions.forEach(function (question) {
    question.addEventListener("toggle", function () {
        if (question.open) {
            questions.forEach(function (otherQuestion) {
                if (otherQuestion !== question) {
                    otherQuestion.open = false;
                }
            });
        }
    });
});


const year = document.getElementById("year");

year.textContent = new Date().getFullYear();