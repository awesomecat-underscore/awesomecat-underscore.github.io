var img = document.createElement("img");
img.src = "/images/acabode.png"; 
img.style.width = '316';
img.style.height = '251';

var message = document.createElement("p");
message.innerHTML = "comming soon :)"
// message.style.

var src = document.getElementById("header");
src.appendChild(img);
src.style.scale = '25%';
message.style.fontSize = "400%";
src.appendChild(message);