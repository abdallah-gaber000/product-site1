const clickableTexts = document.getElementsByClassName("clickable-text");

for (let i = 0; i < clickableTexts.length; i++) {
  clickableTexts[i].addEventListener("click", function () {
    window.location.href = "/prodinfo.html";
  });
}
const clickHome = document.getElementsByClassName("nav-link1");

for (let i = 0; i < clickHome.length; i++) {
  clickHome[i].addEventListener("click", function () {
    window.location.href = "/project.html";
  });
}
const clickSignin = document.getElementsByClassName("nav-link3");

for (let i = 0; i < clickSignin.length; i++) {
  clickSignin[i].addEventListener("click", function () {
    window.location.href = "/sign in.html";
  });
}
const clickSignup = document.getElementsByClassName("nav-link4");

for (let i = 0; i < clickSignup.length; i++) {
  clickSignup[i].addEventListener("click", function () {
    window.location.href = "/sign up.html";
  });
}

var logOut = document.getElementByClassName("nav-link5");
logOut.addEventListener("click", function () {
  var newUrl = "/sign in.html";
  window.location.href = newUrl;
});
