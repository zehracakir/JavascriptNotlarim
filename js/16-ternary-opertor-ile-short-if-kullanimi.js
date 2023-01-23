// Ternary operator ile short if kullanımı
let userName=prompt("Kullanıcı Bilginizi yazınız")
let info =document.querySelector("#info")

/* ternary kullanımı : 
kosul ? dogruysa : yanlissa
*/
info.innerHTML=`${userName.length>0?userName:"kullanıcı bilginiz bulunamadı"}`