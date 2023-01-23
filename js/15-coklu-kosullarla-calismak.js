// Çoklu koşullarla çalışmak
let userName=prompt("Kullanıcı Adınız:")
let age=prompt("Yaşınız")
let info=document.querySelector("#info")


if(userName && age>=18){
    info.innerHTML="Ehliyet alabilirsiniz"
}
else if(!userName){
    info.innerHTML="Kullanıcı adı yok"
}
else if(age<18){
    info.innerHTML="Yaş bilginiz yok veya yaşınız tutmuyor"
}
