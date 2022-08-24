// International phone code
// const phoneInputField = document.querySelector("#phone");
//   const phoneInput = window.intlTelInput(phoneInputField,{
//     utilsScript:
//       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
//   });

// Welcome Popup


const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');
const main_popup = document.querySelector('.main-popup');

open_btn.addEventListener('click', () => {
	popup.style.display = 'flex';
  document.querySelector('.frontSection').classList.add('popup-overlay');
	main_popup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;';
});

// let popup = document.getElementById("popup");
// function openPopup(){
//   popup.classList.add("open-popup");
// }
