let modalMain = document.querySelector('#modal_main');
let modalClose = document.querySelectorAll('div.modal__close');
let modalShow = document.querySelector('.show-success');
let modalSuccess = document.querySelector('#modal_success');
modalMain.className = 'modal modal_active';

modalClose.onclick = function () {
  modalMain.className = 'modal'
}
modalShow.onclick = function () {
  modalMain.className = 'modal';
  modalSuccess.className = 'modal modal_active';
}
modalClose[1].onclick = function (){
  modalSuccess.className = 'modal';
  modalMain.className = 'modal';

}