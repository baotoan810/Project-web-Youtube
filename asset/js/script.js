const menuButton = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".screen-overplay");
const themeButton = document.querySelector(".theme-button");

themeButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode")
    themeButton.classList.toggle("uil-sun", isDarkMode);
    themeButton.classList.toggle("uil-moon", !isDarkMode);

});

menuButton.forEach(button => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-hidden")
    });
});


screenOverlay.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden")
});

if (window.innerWidth >= 768) {
    document.body.classList.remove("sidebar-hidden")
}