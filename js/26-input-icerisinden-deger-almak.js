// Input icerisinden deger almak

let formDOM=document.querySelector("#userForm")
formDOM.addEventListener("submit",formSubmit)


function formSubmit(event){
    event.preventDefault()
    console.log("işlem gerçekleşti")
    let scoreInputDOM=document.querySelector("#score") //bilgiyi alma
    console.log(scoreInputDOM.value)
    localStorage.setItem("score",scoreInputDOM.value) //localstorage e kaydetme
}