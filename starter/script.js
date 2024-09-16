"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const header = document.querySelector(".header");
const btnscroll = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
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
});

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
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//test
// tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  // guard clause
  if (!clicked) return;
  tabs.forEach((button) => button.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  const data = clicked.getAttribute("data-tab");
  tabsContent.forEach((el) => {
    el.classList.remove("operations__content--active");
    if (el.classList.contains(`operations__content--${data}`)) {
      el.classList.add("operations__content--active");
    }
  });
});
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
const allSections = document.querySelectorAll(".section");
document.getElementById("sectio--1");
const allButtons = document.getElementsByTagName("button");

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'here is some cookie message <button class= "btn btn--close-cookie">Got it!</button>'
header.append(message);
document.querySelector(".btn--close-cookie").addEventListener("click", function () {
  message.remove();
});
// changing style with js
message.style.backgroundColor = "#37383d"
message.style.width = "110%"

message.style.height = Number.parseInt(getComputedStyle(message).height) + 20 + 'px';

// accessing the root in css  
// document.documentElement.style.setProperty("--color-primary", "red")