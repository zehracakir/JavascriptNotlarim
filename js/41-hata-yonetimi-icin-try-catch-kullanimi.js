// hata yonetimi icin try catch kullanimi

// UNUTMA!! Eger bir blokta hata varsa ve bu bloktaki hatayi yonetmediysen; artik daha asagiya inemezsin, islemleri goremezsin..
//try-catch
let products;

try{
    products.forEach(item=>console.log(item))
}catch(error){
    console.log("error : ",error)
}

console.log("hata yonetimi duzgun calisiyor")

let info="zehracakir"
console.log(info)