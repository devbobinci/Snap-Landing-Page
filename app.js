const burgerBtn = document.querySelector(".nav-btn");
const menuList = document.querySelector(".menu-list");
const cover = document.getElementById("cover");
const optionList = document.querySelector(".options-list");

const showMenu = () => {
  menuList.classList.toggle("showmenu");
  burgerBtn.classList.toggle("close-btn");
  cover.classList.toggle("covering");
};

burgerBtn.addEventListener("click", showMenu);

const opt1 = document.getElementById("options-1");
const opt2 = document.getElementById("options-2");

var menuArray = [opt1, opt2];

var moreItem1 = document.querySelector(".more-item-1");
var moreItem2 = document.querySelector(".more-item-2");

var arrow = moreItem1.lastElementChild;
var arrow2 = moreItem2.lastElementChild;

moreItem1.addEventListener("click", () => {
  opt1.classList.toggle("show-item");
  arrow.classList.toggle("show-option");
});

moreItem2.addEventListener("click", () => {
  opt2.classList.toggle("show-item");
  arrow2.classList.toggle("show-option");
});
