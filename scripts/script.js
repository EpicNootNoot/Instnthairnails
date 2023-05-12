/*
Student Name: William Huynh
File Name: script.js
*/

// Hamburger menu function
function menu() {
  var navlinks = document.getElementById("nav-links");
  var menuicon = document.getElementById("nav-icon");
  
  if(nav-links.style.display === "block") {
    navlinks.style.display = "none";
    menuicon.style.color = "#2a1f14";
  } 
  else {
    navlinks.style.display = "block";
    menuicon.style.color = "#f6eee4";
  }
}

