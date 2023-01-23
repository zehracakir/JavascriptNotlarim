// var ile değişken tanımlamak
// var serverName = "zehracakir";
// console.log(serverName);


// let ile değişken tanımlamak
let serverName;
console.log(serverName);

// let ile değişkene bilgi atamak
serverName = "https://github.com/zehracakir";
console.log(serverName);

//let ile değişkene bilgi atayarak tanımlamak
let password = "1234";
console.log(password);

// değişken ataması yapmadan önce kullanmaya çalışmak
/* console.log(fullName);
 let fullName = "Zehra Çakır";
--> yukarıdaki kullanımda hata alırız. Değişkeni tanımlamadan ekrana bastırmaya çalıştık. Bunu var ile tanımlasak hatayı göremezdik sadece undefined derdi.*/

let fullName = "Zehra Çakır";
console.log(fullName);

// let kullandığımızda hataları daha net şekilde görebiliyoruz. var da böyle bir imkanımız olmuyor.

//let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek
fullName = "Lorem Ipsum";
console.log(fullName);
// let ile tanımlanan değişkenlerin içlerindeki bilgiler birden fazla kez değiştirilebilir

// let ile birleştirme veya ekleme işlemi
fullName = "Zehra"; + fullName
console.log(fullName);
console.log(fullName + " Deneme");
fullName += " Yeni Eklenen Bilgiler";
console.log(fullName);

fullName = "Sıfırlandı";
fullName += " ve yeni fullName";
console.log(fullName);

// const ile değişkeni boş tanımlamaya çalışmak
const serverPassword = ""; // içi boş bir değişken tanımladım
console.log(serverPassword);
const  SERVER_PASSWORD = "sdü";
console.log(SERVER_PASSWORD); 
// SERVER_PASSWORD = "1234"; 
// Bu kısımda hata alırız. Çünkü const ile tanımlanan değişkenlerin içerikleri daha sonradan DEĞİŞTİRİLEMEZ. Değiştirilebilecek bir değişken istersek bunu let ile tanımlayabiliriz.
