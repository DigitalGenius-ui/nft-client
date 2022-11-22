const close = document.querySelector(".close");
const overFlow = document.querySelector(".overFlow")
const nav = document.querySelector("nav");
const bar = document.querySelector(".bar");
close.addEventListener("click", () => {
    overFlow.style.display = "none";
    nav.style.display = "none";
});
overFlow.addEventListener("click", () => {
    overFlow.style.display = "none";
    nav.style.display = "none";
});
bar.addEventListener("click", () => {
    overFlow.style.display = "inline";
    nav.style.display = "flex";
});