// Dom etkinlikleriyle calismak

let greeting =document.querySelector("#greeting")
greeting.addEventListener("click",domClick)

function domClick(){
    console.log("tiklandi")
    console.log(this.innerHTML="zehra degistirdi") //icerigini degistirebiliriz
    console.log(this.style.color="red") //style ile yaziya renk ekleyebiliriz
}