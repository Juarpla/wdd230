const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const parentElement = document.querySelector(".parent");
let originalLinkColor = null;

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌙")) {
        main.style.background = "rgb(0, 0, 0)";
        main.style.color = "rgb(255, 255, 255)";
        parentElement.querySelectorAll("section").forEach(section => {
            section.style.border = "1px solid rgb(255, 255, 255)";
            section.style.boxShadow = "1px 1px 10px rgb(255, 255, 255)";
        });
        parentElement.querySelectorAll("a").forEach(link => {
            if (!originalLinkColor) {
                originalLinkColor = getComputedStyle(link).color;
            }
            link.style.color = "rgb(255, 255, 255)";
        });
        modeButton.textContent = "☀️";
    } else {
        main.style.background = "rgb(255, 255, 255)";
        main.style.color = "rgb(0, 0, 0)";
        parentElement.querySelectorAll("section").forEach(section => {
            section.style.border = "1px solid rgb(0, 0, 0)";
            section.style.boxShadow = "1px 1px 10px rgb(0, 0, 0)";
        });
        parentElement.querySelectorAll("a").forEach(link => {
            link.style.color = originalLinkColor;
        });
        modeButton.textContent = "🌙";
    }
});
