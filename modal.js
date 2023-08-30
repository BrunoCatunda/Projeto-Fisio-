// cardOn

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
  };

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});


// card two

const openModalTwoButton = document.querySelector("#open-modaltwo");
const closeModalTwolButton = document.querySelector("#close-modaltwo");
const modalTwo = document.querySelector("#modaltwo");
const fadeTwo = document.querySelector("#fadetwo");

const toggleModalTwo = () => {
  [modalTwo, fadeTwo].forEach((el) => el.classList.toggle("hide"));
  };

[openModalTwoButton, closeModalTwolButton, fadeTwo].forEach((el) => {
    el.addEventListener("click", () => toggleModalTwo());
});
