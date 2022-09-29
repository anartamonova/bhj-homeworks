const dropLink = Array.from(document.getElementsByClassName("dropdown__link"));
const drop = document.querySelector(".dropdown__value");
const dropList = document.querySelector(".dropdown__list");

drop.addEventListener("click", function (event) {
    dropList.classList.toggle("dropdown__list_active")
});

for (let i = 0; i < dropLink.length; i++) {
    dropLink[i].addEventListener("click", function (ev){
        ev.preventDefault();
        dropList.classList = "dropdown__list";
        drop.textContent = this.textContent;
    })
}