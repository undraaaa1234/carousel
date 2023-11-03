const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slide = document.querySelector(".slide");

let index = 1;

left.addEventListener("click", () => {
    if (index === 0) return;
    index--;
    slide.style.transition = "500ms";
    slide.style.transform = `translateX(${index * -20}%)`
});

right.addEventListener("click", () => {
    if (index === 4) return;
    index++;
    slide.style.transition = "500ms";
    slide.style.transform = `translateX(${index * -20}%)`
    clearInterval(id)
});

slide.addEventListener("transitionend", () => {
    if (index === 4) {
        index = 1;
        slide.style.transition = "none";
        slide.style.transform = `translateX(${index * -20}%)`
    }
});

slide.addEventListener("transitionstart", () => {
    if (index === 0) {
        index = 3;
        slide.style.transition = "none";
        slide.style.transform = `translateX(${index * -20}%)`
    }
});

const id = setInterval(() => {
    index++;
    slide.style.transition = "500ms";
    slide.style.transform = `translateX(${index * -20}%)`
}, 2000);
