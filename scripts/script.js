const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("hide")) {
        menu.classList.remove("hide");
        // adds the menu (hamburger) icon
        toggle.innerHTML = "<i class='fas fa-bars'></i>";
    } 
    else {
        menu.classList.add("hide");
        toggle.innerHTML = "<i class='fas fa-times'></i>";
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu);