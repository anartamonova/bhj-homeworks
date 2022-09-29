let modalMain = document.querySelector("#modal_main");
let modalClose = document.querySelectorAll("div.modal__close");
let modalShow = document.querySelector(".show-success");
let modalSuccess = document.querySelector("#modal_success");
modalMain.className = "modal modal_active";


modalShow.onclick = function () {
  modalMain.className = "modal";
  modalSuccess.className = "modal modal_active";
}

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].onclick = function () {
    let activeModalClose = modalClose[i];
    if (activeModalClose.closest(".modal_active")) {
      activeModalClose.closest(".modal_active").className = "modal";
    }
  }
}
