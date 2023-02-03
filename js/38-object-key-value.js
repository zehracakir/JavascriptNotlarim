//object key value
//[key1:1, key2=2,...]
//dogru anahtar bilgisi olusturmak
let laptop1={
    brand: "Apple",
    model: "MackBook Pro", //bir key baslarken mutlaka karakter ile baslar
    "1kg": 2 //illa sayi ile baslamak istiyorsak tirnak icine almamız lazım
    //keyler bosluksuz yazilmali camelCase ya da _ ile yazabiliriz. _ genelde kullanilmaz

}

//key lere ulasma
console.log(laptop1.brand) 
console.log(laptop1["brand"]) //ustteki ile ayni kullanim. Ikisini de kullanabiliriz
console.log(laptop1.model)
console.log(laptop1["1kg"])

//anahtar bilgisine yeni deger eklemek
laptop1.brand="Mac"
console.log(laptop1) 
laptop1["brand"]="Mac1"
console.log(laptop1) 

//yeni bilgi eklemek istiyorsak
laptop1.version="10.15.7"
console.log(laptop1)

//icerisindeki anahtarlara bakmak, bilgilerine bakmak
keys=Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(key => {
    console.log(key)
    console.log(laptop1[key])
});

//deger bilgilerine ulasmak (values) => Object.values(item)
console.log(Object.values(laptop1))

let values=Object.values(laptop1)
values.forEach(values => {
    console.log(values)
    
});