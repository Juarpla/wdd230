document.addEventListener("DOMContentLoaded", function () {
    const currentDay = new Date().getDay();

    if (currentDay === 1 || currentDay === 2 || currentDay === 3) {
        const banner = document.querySelector(".banner");
        banner.style.display = "block";

        const closeButton = document.querySelector(".close-button");
        closeButton.addEventListener("click", function () {
            banner.style.display = "none";
        });
    }
});