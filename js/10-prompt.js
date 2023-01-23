//prompt ile kullanıcıdan bilgi almak

let fullName=prompt("lütfen adınızı giriniz: ")
// console.log(fullName) //kullanıcıdan adını aldık ve bunu console da görüntüledik

//
let greeting=document.querySelector("#greeting") //kullanıcı da bunu görsün istiyorsak
greeting.innerHTML=`${greeting.innerHTML} <small style="color:red">${fullName}</small>` 