var nav = document.getElementById("navbar");
const logo = document.createElement("logo");

var title = "<h1>Awesomecat's Abode</h1>";

logo.innerHTML = "<img src='/images/acabode.png'>"
logo.style.scale = 25;

nav.innerHTML = logo + title;

nav.style.textAlign = "center";

nav.style.fontFamily = "Arial"
nav.style.fontSize = "12px"
