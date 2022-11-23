const close = document.querySelector(".close");
const overFlow = document.querySelector(".overFlow")
const nav = document.querySelector("nav");
const bar = document.querySelector(".bar");
close.addEventListener("click", () => {
    overFlow.style.display = "none";
    nav.classList.remove("active")
});
overFlow.addEventListener("click", () => {
    overFlow.style.display = "none";
    nav.classList.remove("active");
});
bar.addEventListener("click", () => {
    overFlow.style.display = "inline";
    nav.classList.add("active");
});