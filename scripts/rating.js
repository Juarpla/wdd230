const rangeValue = document.querySelector("#rangeValue");
const range = document.querySelector("#rating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangeValue.innerHTML = range.value;
}