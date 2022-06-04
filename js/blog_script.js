"use strict";

// SCROLL TO TOP
const scrollBtn = document.querySelector(".scroll-to-top");
const footerHeight = document.querySelector(".footer").offsetHeight;
window.onscroll = () => {
  if (window.scrollY / window.innerHeight >= 0.3) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
};
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// BLOG NAV
const navItems = Array.from(document.querySelectorAll(".post-nav-list li a"));
function clearActive() {
  navItems.forEach((item) => item.classList.remove("active"));
}
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    clearActive();
    item.classList.add("active");
  });
});

// SHOW/HIDE PASSWORD
const showPw = document.querySelectorAll(".form__password-box__icon"),
  inputPws = document.querySelectorAll(".form__password-box input");

showPw.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    inputPws.forEach((inputPw) => {
      if (inputPw.type === "password") {
        inputPw.type = "text";
        eyeIcon.name = "eye-off-outline";
      } else {
        inputPw.type = "password";
        eyeIcon.name = "eye-outline";
      }
    });
  });
});

// LOGIN FORM
const switchBtns = document.querySelectorAll(".form__signup-link"),
  loginForm = document.querySelector(".form--login"),
  signupForm = document.querySelector(".form--signup"),
  overlay = document.querySelector(".overlay"),
  openFrom = document.querySelector(".header-tool__auth");
openFrom.addEventListener("click", () => {
  loginForm.classList.add("show-form");
  overlay.style.display = "block";
  // Hide mobile menu when login form show
  mobileNav.classList.remove("active");
  mobileNavBtn.name = "menu-outline";
  mobileNavBtn.style.zIndex = "0";
});
overlay.addEventListener("click", () => {
  loginForm.classList.remove("show-form");
  signupForm.classList.remove("show-form");
  overlay.style.display = "none";
  // For Mobile Nav
  mobileNav.classList.remove("active");
  mobileNavBtn.name = "menu-outline";
  mobileNavBtn.style.zIndex = "3";
});
switchBtns.forEach((switchBtn) => {
  switchBtn.addEventListener("click", () => {
    loginForm.classList.toggle("show-form");
    signupForm.classList.toggle("show-form");
  });
});

// MOBILE MENU
const mobileNavBtn = document.querySelector(".mobile-nav__icon"),
  mobileNav = document.querySelector(".header-tool");
mobileNavBtn.addEventListener("click", () => {
  if (mobileNavBtn.name === "menu-outline") {
    mobileNavBtn.name = "close-outline";
    overlay.style.display = "block";
  } else {
    mobileNavBtn.name = "menu-outline";
    overlay.style.display = "none";
  }
  mobileNav.classList.toggle("active");
});
