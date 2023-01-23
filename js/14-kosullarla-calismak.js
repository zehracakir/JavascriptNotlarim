// Koşullarla calismak

// eger kullanici bilgisi varsa ekrana ismini yazdır
/* eger(username.length>0)
    {
        console.log(username)
    }degilse{
        console.log("bilgi yok")
    }
*/

let username=prompt("Kullanıcı adınızı giriniz : ")
if(username.length>0){ //if kismi her zaman true ise calisir.
    console.log(`Kullanıcı adınız : ${username}`)
}
else{
    console.log("bilgi yok")
}