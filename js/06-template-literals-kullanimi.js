let username= "zehracakir";
const DOMAIN = "github.com"

// stringleri birleştirme
let email = username +"@"+DOMAIN
console.log("Merhaba",username,"sitemize hoşgeldin","mail adresin:",email);

// let info = `Merhaba username` // istedigimiz gibi değil çıktısı -> Merhaba username
// console.log(info)

let info = `Merhaba ${username} sitemize hoşgeldin.
Mail adresin: ${email} 
kisa isminiz: ${username[0]}.
mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2+3)*10} TL
gunun saat bilgisi: ${new Date().getHours()}`
console.log(info) /* Merhaba zehracakir sitemize hoşgeldin.
                     Mail adresin: zehracakir@github.com 
                     kisa isminiz: z.
                     mail adresinin uzunluğu: 21
                     borcunuz: 50 TL
                     gunun saat bilgisi: 23*/
// template literals ile birlikte birden çok satır yazabiliriz.
// değişken isimlerini ${} ile kullanırız.