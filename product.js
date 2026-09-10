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

//product search func()
    var pbox = document.getElementById("p-container")
    var search = document.getElementById("search")
   
    var productlist = pbox.querySelectorAll("div")
    console.log(productlist)
    
    search.addEventListener("keyup",function()
   {
      var enteredval = event.target.value.toUpperCase()
    

      for(i=0;i<productlist.length;i++)
      {

         var pname = productlist[i].querySelector("h1").textContent
        if(pname.toUpperCase().indexOf(enteredval)<0)
      {
      productlist[i].style.display = "none"
      }
      else{
         productlist[i].style.display = "block"
      }
      }
   })
