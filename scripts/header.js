// ik my js sucks pls don't judge :(

var root = document.getElementById("header");

var p = document.createElement("p");
var title = document.createElement("h1");

var home = document.createElement("a");
var music = document.createElement("a");
var cats = document.createElement("a");

home.innerHTML = "home";
home.href = "/";
home.style.padding = "1%";
home.style.color = "white";

music.innerHTML = "music";
music.href = "/music/";
music.style.padding = "1%";
music.style.color = "white";

cats.innerHTML = "cats";
cats.href = "/cats/";
cats.style.padding = "1%";
cats.style.color = "white";


p.style.textAlign = "center";
p.style.backgroundColor = "black";
p.style.paddingTop = "2%";
p.style.paddingBottom = "2%";
p.style.marginLeft = "30%";
p.style.marginRight = "30%";
p.style.borderRadius = "50px";
p.style.fontSize = '30px';

p.style.fontFamily = "Arial";

title.innerHTML = "awesomecat's abode"
title.style.textAlign = 'center';
title.style.fontFamily = 'Comic Sans MS, Arial';

// why am i using a p as a div ???



root.appendChild(p); 

root.insertAdjacentElement("beforebegin", title);
p.insertAdjacentElement("beforeend", home);
p.insertAdjacentElement("beforeend", music);
p.insertAdjacentElement("beforeend", cats);
