const hasTooltip = document.querySelectorAll(".has-tooltip");
for (let i = 0; i < hasTooltip.length; i++) {
  hasTooltip[i].insertAdjacentElement("afterEnd", "<div class='tooltip'> $ {hasTooltip[i].title}</div>");
  hasTooltip[i].addEventListener("click", (element) => {
    element.preventDefault();

    const listTooltip = document.querySelectorAll(".tooltip");
    if (listTooltip[i].classList.contains ("tooltip_active")) {
        listTooltip[i].classList.remove("tooltip_active");
    } else {
        listTooltip[i].classList.add("tooltip_active");
        let position = hasTooltip[i].getBoundingClientRect();
        listTooltip[i].style.left = position.left + "px";
        listTooltip[i].style.top = position.top + 20 + "px";
    }
  })

}