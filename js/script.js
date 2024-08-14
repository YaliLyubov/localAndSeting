const btnAdd= document.querySelector('.btn_add');
const switchOne = document.querySelector('.switch1');

switchOne.addEventListener('change', function() {
    console.log(this.checked ? this.value : 'off');
});
const btnCreateLocal = document.querySelector('.btn_location');
const btnClose = document.querySelector('.close');
const overlay = document.querySelector('#overlay');
const modalCreate = document.querySelector('.create_popup');

btnCreateLocal.addEventListener('click', function () {
  overlay.classList.add('show');
  modalCreate.classList.add('show');
});
btnClose.addEventListener('click', function () {
  overlay.classList.remove('show');
  modalCreate.classList.remove('show');
});
const changeBtn = document.querySelector('.link_change');
const modalChange = document.querySelector('.change_popup');
const btnClose2 = document.querySelector('.close2');
changeBtn.addEventListener('click', function () {
  overlay.classList.add('show');
  modalChange.classList.add('show');
});
btnClose2.addEventListener('click', function () {
  overlay.classList.remove('show');
  modalChange.classList.remove('show');
});