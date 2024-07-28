// script.js
document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            const icon = this.querySelector(".icon");

            if (panel.style.display === "block") {
                panel.style.display = "none";
                icon.src = "./assets/images/icon-plus.png";
            } else {
                panel.style.display = "block";
                icon.src = "./assets/images/icon-minus.png";
            }
        });
    });
});
