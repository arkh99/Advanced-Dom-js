'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector(".header")

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal)
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const allSections = document.querySelectorAll(".section");
document.getElementById("sectio--1")
const allButtons = document.getElementsByTagName("button")

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = 'Its just a stupid cookie to boder you :). <button class="btn btn--close-cookie">Got it</button>'
header.append(message)
// header.append(message)
// header.append(message.cloneNode(true))
// header.append(message.cloneNode())
// header.before(message);
// header.after(message);
document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  message.remove();
})
message.style.backgroundColor = "#37383d";
message.style.width = "105%"

// retrieving the computed style of an element cause the document.style only retrieve or manipulate the inline styles
// console.log(message.style.width);
// console.log(Number.parseFloat(getComputedStyle(message).height), 10);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px"

document.documentElement.style.setProperty('--color-primary', 'orangered')
document.documentElement.style.setProperty("--color-primary-darker", "orange")

const logo = document.querySelector(".nav__logo");
// console.log(logo.className);
// retrieving custom property 
// console.log(logo.name);
logo.setAttribute("company", "bankist");
const twitter = document.querySelector(".twitter-link");

// console.log(twitter.href);
// console.log(twitter.getAttribute("href"));
logo.classList.add("aj", "kj");
logo.classList.remove("kj");
console.log(logo.classList.contains("aj"));
console.log(logo.className);