$(document).ready(function() {
    const modalBtn = document.querySelector('.modal-btn');
    const modalBtnOne = document.querySelector('.modal-btn-one');
    const modalBtnTwo = document.querySelector('.modal-btn-two');

    const modal = document.querySelector('.modal-overlay');
    const modalOne = document.querySelector('.modal-overlay-one');
    const modalTwo = document.querySelector('.modal-overlay-two');

    const closeBtn = document.querySelector('.close-btn');
    const closeBtnOne = document.querySelector('.close-btn-one');
    const closeBtnTwo = document.querySelector('.close-btn-two');

    modalBtn.addEventListener('click', function() {
        modal.classList.add("open-modal")
    })
    modalBtnOne.addEventListener('click', function() {
        modalOne.classList.add("open-modal-one")
    })
    modalBtnTwo.addEventListener('click', function() {
        modalTwo.classList.add("open-modal-two")
    })

    closeBtn.addEventListener('click', function() {
        modal.classList.remove("open-modal")
    })
    closeBtnOne.addEventListener('click', function() {
        modalOne.classList.remove("open-modal-one")
    })
    closeBtnTwo.addEventListener('click', function() {
        modalTwo.classList.remove("open-modal-two")
    })

    modal.addEventListener('click', function() {
        modal.classList.remove("open-modal")
    })
    modalOne.addEventListener('click', function() {
        modalOne.classList.remove("open-modal-one")
    })
    modalTwo.addEventListener('click', function() {
        modalTwo.classList.remove("open-modal-two")
    })
});