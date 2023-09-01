// cardOne

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
const closeModalTwoButton = document.querySelector("#close-modaltwo");
const modalTwo = document.querySelector("#modaltwo");
const fadeTwo = document.querySelector("#fadetwo");

const toggleModalTwo = () => {
  [modalTwo, fadeTwo].forEach((el) => el.classList.toggle("hide"));
  };

[openModalTwoButton, closeModalTwoButton, fadeTwo].forEach((el) => {
    el.addEventListener("click", () => toggleModalTwo());
});


// card three

const openModalThreeButton = document.querySelector("#open-modalthree");
const closeModalThreeButton = document.querySelector("#close-modalthree");
const modalThree = document.querySelector("#modalthree");
const fadeThree = document.querySelector("#fadethree");

const toggleModalThree = () => {
  [modalThree, fadeThree].forEach((el) => el.classList.toggle("hide"));
  };

[openModalThreeButton, closeModalThreeButton, fadeThree].forEach((el) => {
    el.addEventListener("click", () => toggleModalThree());
});

// card four


const openModalFourButton = document.querySelector("#open-modalfour");
const closeModalFourButton = document.querySelector("#close-modalfour");
const modalFour = document.querySelector("#modalfour");
const fadeFour = document.querySelector("#fadefour");

const toggleModalFour = () => {
  [modalFour, fadeFour].forEach((el) => el.classList.toggle("hide"));
  };

[openModalFourButton, closeModalFourButton, fadeFour].forEach((el) => {
    el.addEventListener("click", () => toggleModalFour());
});


// card five
const openModalFiveButton = document.querySelector("#open-modalfive");
const closeModalFiveButton = document.querySelector("#close-modalfive");
const modalFive = document.querySelector("#modalfive");
const fadeFive = document.querySelector("#fadefive");

const toggleModalFive = () => {
  [modalFive, fadeFive].forEach((el) => el.classList.toggle("hide"));
  };

[openModalFiveButton, closeModalFiveButton, fadeFive].forEach((el) => {
    el.addEventListener("click", () => toggleModalFive());
});
// card six
const openModalSixButton = document.querySelector("#open-modalsix");
const closeModalSixButton = document.querySelector("#close-modalsix");
const modalSix = document.querySelector("#modalsix");
const fadeSix = document.querySelector("#fadesix");

const toggleModalSix = () => {
  [modalSix, fadeSix].forEach((el) => el.classList.toggle("hide"));
  };

[openModalSixButton, closeModalSixButton, fadeSix].forEach((el) => {
    el.addEventListener("click", () => toggleModalSix());
});


// // card seven
const openModalSevenButton = document.querySelector("#open-modalseven");
const closeModalSevenButton = document.querySelector("#close-modalseven");
const modalSeven = document.querySelector("#modalseven");
const fadeSeven = document.querySelector("#fadeseven");

const toggleModalSeven = () => {
  [modalSeven, fadeSeven].forEach((el) => el.classList.toggle("hide"));
  };

[openModalSevenButton, closeModalSevenButton, fadeSeven].forEach((el) => {
    el.addEventListener("click", () => toggleModalSeven());
});
// card eight
const openModalEightButton = document.querySelector("#open-modaleight");
const closeModalEightButton = document.querySelector("#close-modaleight");
const modalEight = document.querySelector("#modaleight");
const fadeEight = document.querySelector("#fadeeight");

const toggleModalEight = () => {
  [modalEight, fadeEight].forEach((el) => el.classList.toggle("hide"));
  };

[openModalEightButton, closeModalEightButton, fadeEight].forEach((el) => {
    el.addEventListener("click", () => toggleModalEight());
});