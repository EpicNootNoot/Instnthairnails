/*
Student Name: William Huynh
File Name: script.js
*/

// Hamburger menu function
function menu() {
  var navlinks = document.getElementById("nav-links");
  var menuicon = document.getElementById("icon");
  
  if(navlinks.style.display === "block") {
    navlinks.style.display = "none";
    menuicon.style.color = "#000";
  } 
  else {
    navlinks.style.display = "block";
    menuicon.style.color = "#5eb5fd";
  }
}