var favs = Array.from(document.querySelectorAll(".fa-heart"));
var deleteBtns = Array.from(document.querySelectorAll(".fa-ban"));
var cards = Array.from(document.querySelectorAll(".cards"));
var plusBtns = Array.from(document.querySelectorAll(".fa-plus"));
var minusBtns = Array.from(document.querySelectorAll(".fa-circle-minus"));









for(let fav of favs) {
fav.addEventListener("click",function(){
    if (fav.style.color == "black" ){
        fav.style.color = "red"
    } else {
        fav.style.color = "black"
    }
})
}
for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function(){
        cards[i].remove()
        total()
    })
}
 for(let plus of plusBtns) 
 plus.addEventListener("click",function(){
     plus.previousElementSibling.innerHTML++
     total()
 })

for(let minus of minusBtns)
minus.addEventListener("click",function(){
  minus.nextElementSibling.innerHTML > 0 ? minus.nextElementSibling.innerHTML -- : null
  total()

})
function total()
    let qte = Array.from(document.querySelectorAll(".qute"))
    let price = Array.from(document.querySelectorAll(".unit-price"))
    let s = 0
    for (let i=0 ; i< price.length; i++){
        s= s + price[i].innerHTML * qte[i].innerHTML
    }
    document.getElementById("total-price").innerHTML = s
