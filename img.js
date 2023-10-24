const left = document.querySelector(".left");
const right = document.querySelector(".right");
const images = document.querySelector(".images");

let index = 1;

left.addEventListener("click", () => {
    if (index === 0) return;
    index--;
    images.style.transition = "500ms";
    images.style.transform = `translateX(${index * -20}%)`
});

right.addEventListener("click", () => {
    if (index === 4) return;
    index++;
    images.style.transition = "500ms";
    images.style.transform = `translateX(${index * -20}%)`
});

images.addEventListener("transitionend", () => {
    if (index === 4) {
        index = 1;
        images.style.transition = "none";
        images.style.transform = `translateX(${index * -20}%)`
    }
});

images.addEventListener("transitionstart", () => {
    if (index === 0) {
        index = 3;
        images.style.transition = "none";
        images.style.transform = `translateX(${index * -20}%)`
    }
});
