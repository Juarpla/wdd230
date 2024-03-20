const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
let originalLinkColor = null;

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌙")) {
        main.style.background = "rgb(0, 0, 0)";
        main.style.color = "rgb(255, 255, 255)";
        main.querySelectorAll(".card").forEach(card => {
            card.style.border = "1px solid rgb(255, 255, 255)";
            card.style.boxShadow = "1px 1px 10px rgb(255, 255, 255)";
        });
        main.querySelectorAll(".cardTitle").forEach(title => {
            title.style.color = "rgb(255, 255, 255)";
        });
        main.querySelectorAll("a").forEach(link => {
            if (!originalLinkColor) {
                originalLinkColor = getComputedStyle(link).color;
            }
            link.style.color = "rgb(255, 255, 255)";
        });
        modeButton.textContent = "☀️";
    } else {
        main.style.background = "rgb(255, 255, 255)";
        main.style.color = "rgb(0, 0, 0)";
        main.querySelectorAll(".card").forEach(card => {
            card.style.border = "1px solid rgb(0, 0, 0)";
            card.style.boxShadow = "1px 1px 10px rgb(0, 0, 0)";
        });
        main.querySelectorAll(".cardTitle").forEach(title => {
            title.style.color = "rgb(20, 33, 61)";
        });
        main.querySelectorAll("a").forEach(link => {
            link.style.color = originalLinkColor;
        });
        modeButton.textContent = "🌙";
    }
});
