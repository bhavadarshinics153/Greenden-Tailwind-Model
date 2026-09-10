//sidenav menu icon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var clsnav = document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

clsnav.addEventListener("click",function(){
    sidenav.style.right = "-50%"
})

