/*
Student Name: William Huynh
File Name: script.js
Date: 04/19/2023
*/

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

// Hamburger menu function
function menu() {
  var navlinks = document.getElementById("nav-links");
  var menuicon = document.getElementById("icon");
  
  if(nav-links.style.display === "block") {
    navlinks.style.display = "none";
    menuicon.style.color = "#2a1f14";
  } 
  else {
    navlinks.style.display = "block";
    menuicon.style.color = "#f6eee4";
  }
}

