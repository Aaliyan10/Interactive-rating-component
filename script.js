var list = document.querySelectorAll("li");
var button = document.querySelector("button");
var mainPage=document.querySelector(".rating");
var thanksPage=document.querySelector(".thanks")

function update(){
    var rating=document.querySelector(".selected").textContent;
    mainPage.style.display="none";
    thanksPage.style.display="block";
    document.querySelector("span").textContent=rating;
    
    
}
list.forEach(function (li) {
  li.addEventListener("click", function () {
    if (document.querySelector(".selected") != null) {
      document.querySelector(".selected").classList.remove("selected");
    }
    this.classList.add("selected");
  });
});

button.addEventListener("click",function(){
    if(document.querySelector(".selected")!=null){
        update();
    }
})
