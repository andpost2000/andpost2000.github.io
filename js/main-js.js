var navMain = document.querySelector(".page-header__nav");
var navToggle = document.querySelector(".page-header__nav-toggle");

navToggle.addEventListener("click", function(e) {
  navMain.classList.toggle("page-header__nav--show");
});
