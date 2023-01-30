// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

var navToggle = document.querySelector(".nav-toggle")
var links = document.querySelector(".links")

navToggle.addEventListener ("click", function (){
    //console.log(links.classList);
//console.log(links.classList.contains("links")); return true
//console.log(links.classList.contains("random")); return false

//without using toggle
//if (links.classList.contains("show-links")){
 //   links.classList.remove("show-links")
//} else {
 //   links.classList.add("show-links")
//}

//using toggle
links.classList.toggle("show-links")
})