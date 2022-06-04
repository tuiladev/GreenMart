"use strict";

// SEARCH BAR SUGGEST
const searchSuggest = document.querySelector(".suggest-content"),
  searchContent = document.querySelector(".header-search__box"),
  defaulText = searchSuggest.textContent,
  searchBtn = document.querySelector(".header-search__btn");
function searchText() {
  if (searchContent.value.trim() !== "")
    searchSuggest.textContent = `Tìm kiếm: ${searchContent.value}`;
  else searchSuggest.textContent = defaulText;
}
searchContent.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchBtn.click();
  }
});
searchBtn.addEventListener("click", () => {
  location.reload();
});

// LOADMORE BUTTON
const loadMore = document.querySelector(".topsale-btn"),
  circleLoading = document.querySelector(".topsale-circle-loading");
let productsList = document.querySelectorAll(".topsale-grid >li"),
  currentItem = 12;
loadMore.addEventListener("click", function showMore() {
  circleLoading.style.display = "block";
  setTimeout(() => {
    circleLoading.style.display = "none";
    if (currentItem >= productsList.length) {
      window.open("./login.html");
    }
    for (let i = currentItem; i < currentItem + 12; i++)
      if (productsList[i]) {
        productsList[i].style.display = "block";
        productsList[i].style.animation = "fadeIn 1s ease";
      }
    currentItem += 12;
  }, 500);
});

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

// FLASHSALE PRODUCT PROGRESS BAR
const soldCount = Array.from(
    document.querySelectorAll(".flashsale-product__progress")
  ),
  progressBar = Array.from(
    document.querySelectorAll(".flashsale-product__progress-thumb")
  ),
  qantityCount = [];
for (let i = 0; i < soldCount.length; i++) {
  qantityCount[i] = parseInt(soldCount[i].getAttribute("data-qantity"));
  soldCount[i] = parseInt(soldCount[i].outerText.substring(7));
  progressBar[i].style.width = (soldCount[i] / qantityCount[i]) * 100 + "%";
}

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
