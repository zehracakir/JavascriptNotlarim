// Form Submit

let formDOM=document.querySelector("#userForm")
formDOM.addEventListener("submit",formSubmit)
function formSubmit(event){
    event.preventDefault() //default islemi engelledik
    console.log("İşlem gerçekleşti")
}