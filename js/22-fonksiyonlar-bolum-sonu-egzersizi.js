// Fonksiyonlar bolum sonu egzersizi
let counter=0
let counterDOM=document.querySelector("#counter")
let increaseDOM=document.querySelector("#increase")
let decreaseDOM=document.querySelector("#decrease")

counterDOM.innerHTML=counter
increaseDOM.addEventListener("click",function(){
    console.log(this.id)
})
counterDOM.innerHTML=counter
decreaseDOM.addEventListener("click",function(){
    console.log(this.id)
})
// ya da söyle yapariz

increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)
function clickEvent(){
    console.log(this.id)
    if(this.id=="increase"){
        counterDOM.innerHTML=counter+=1
    }
    else{
        counterDOM.innerHTML=counter-=1
    }
}