const FOOTER = document.createElement("footer");
document.querySelector("footer").append(FOOTER);

const dateObject = new Date()
const lastModified = document.lastModified
FOOTER.innerHTML = "<hr> <p>Copyright (c)" + dateObject.getFullYear() + "<br> Last Modified on: " + lastModified + "</p>";
FOOTER.style.fontSize = "8pt";