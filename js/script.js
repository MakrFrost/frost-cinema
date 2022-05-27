const burgerMenu = document.querySelector(".header__menu-btn");
const navigation = document.querySelector(".navigation");
const navigationClose = document.querySelector(".navigation-button");

burgerMenu.addEventListener("click", () => {
  navigation.style.top = "0";
});

navigationClose.addEventListener("click", () => {
  navigation.style.top = "";
});
