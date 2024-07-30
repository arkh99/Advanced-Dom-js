'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector(".header")
const btnscroll = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1"); 


///////////////////////////////////////
// Modal window


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

// scrolling effect 
btnscroll.addEventListener("click", (e) => {
  // old way of scrolling to that view

  // const s1coords = section1.getBoundingClientRect();
  // window.scroll({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth"
  // })
  section1.scrollIntoView({ behavior: "smooth" });
})

// page navigation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({behavior: "smooth"})
//   })
// })

// with event deligation
// 1. add event listener to the common parent element
// 2. detemine what element originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    console.log("clicked");
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"})
  }
})



///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

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

// document.documentElement.style.setProperty('--color-primary', 'orangered')
// document.documentElement.style.setProperty("--color-primary-darker", "orange")

const logo = document.querySelector(".nav__logo");
// console.log(logo.className);
// retrieving custom property 
// console.log(logo.name);
logo.setAttribute("company", "bankist");
const twitter = document.querySelector(".twitter-link");

// console.log(twitter.href);
// console.log(twitter.getAttribute("href"));



// const h1 = document.querySelector("h1");

// const h1Alert = (e) => {
//   alert("you are reading h1");
// }
// h1.addEventListener("mouseenter", h1Alert)
// setTimeout(() => h1.removeEventListener("mouseenter", h1Alert), 3000)


// old way of adding event listener
// h1.onmouseenter = (e) => {
//   alert("you are reading h1- on event property")
// }


// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`


// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();
// })

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// })

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// })

