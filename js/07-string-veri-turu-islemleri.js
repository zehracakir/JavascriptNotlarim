let email = "zehracakir@gmail.com";
let firstName = "Zehra";
let lastName = "Çakır";

// string karakter sayısı --> length
console.log(email.length); // 20

// ilk karakteri bulmak --> [0]
console.log(firstName[0]); // Z
console.log(firstName.charAt(0)); // Z

// buyuk harf - kucuk harf  donusumleri
firstName=firstName.toUpperCase(); // hepsini büyük harfe çevirdik
console.log(firstName); // ZEHRA

firstName=firstName.toLowerCase(); // hepsini küçük harfe çevirdik
console.log(firstName); // zehra

// String içinde istediğimiz bilgiyi aramak ve yerini bulmak --> search
console.log(email.search("@")); // 10
console.log(email[10]); // @
// Eğer olmayan bir şeyi arıyorsak bize -1 döndürür.
console.log(email.search("github.com")); // emailde github.com olmadığından -1 döner.

// string içerisinden belli bir aralığı almak 
console.log(email.slice(0,10)); // zehracakir
// domain bilgisi almak
let DOMAIN = email.slice(email.search("@")+1); // almak istediğimiz yeri alırken +1 diyip almalıyız. Çünkü son elemanı kabul etmiyor.
console.log(DOMAIN); // gmail.com

console.log(DOMAIN.indexOf(".")); // . nın nerde olduğunu bulduk --> 5
console.log(DOMAIN.slice(0,DOMAIN.indexOf("."))); // sadece gmail kısmını aldık 

// bilgiyi değiştir --> replace 
email = email.replace('gmail.com','github.com');
console.log(email);
 
// istediğim bilgi var mı? --> includes
console.log(email.includes("bilgisayar"));// false
console.log(email.includes("cakir")); // true

// istediğimiz bilgiyle mi başlıyor ? istediğimiz bilgiyle mi bitiyor ? --> startsWidth endsWidth 
console.log(email.startsWith("zehra")); // true
console.log(email.endsWith("@")); // false

// ilk harflerini büyük yapmak
let fullName = `${firstName[0].toUpperCase()}${firstName}`; // Zzehra --> olmadı 
console.log(fullName);
let fullName1 = `${firstName[0].toUpperCase()}${firstName.slice(1)}`; // Zehra 
console.log(fullName1);

 // string birleştirme
 let firstName1="Zehra";
 let lastName1="Çakır";
 console.log(firstName1.concat(" ",lastName1)); // Zehra Çakır

 // Belirtilen index numarasında yer alan karakterin Unicode değerini bulma --> charCodeAt()
 var name1= "Zehra Çakır";
 console.log(name1.charCodeAt(1)); // 101

// Split metodu ile istenilen metin diziye çevrilebilir. Kullanılan parametre ile metnin nasıl parçalanacağı belirtilir.
var name2= "Zehra,Çakır";
console.log(name2.split(",")); // ['Zehra', 'Çakır']