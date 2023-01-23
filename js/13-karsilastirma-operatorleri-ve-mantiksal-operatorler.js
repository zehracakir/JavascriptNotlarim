// Karşılaştırma Operatörleri ve Mantıksal Operatörler

let price="100"
let user="zehra"

// == Esitse --> true-false doner
console.log(price==1) // false
console.log(price==100) //true

// === Hem degeri hem de turu esitse
console.log("=== : ",price===1) //false : turu de degeri de esit degil
console.log("=== : ",price===100) // false : degeri esit fakat turu esit degil

// != Esit Degilse
console.log(price!=1) //true : price ın degeri 1 e esit degildir.

// < Kucukse
console.log("price<100",price<100) //false

// <= Kucuk veya esitse
console.log("price<=100",price<=100) //true

// > Buyukse 
console.log("price>100",price>100) //false

// <= Buyuk veya esitse
console.log("price=>100",price>=100) //true

// && ve 
console.log( price==100 && user == "zehra") //true : tum sartlar dogruysa true

// || veya 
console.log( price==100 || user == "cakir")//true : herhangi bir sart dogruysa true

// ! degil (tersi)
console.log( !(price==100 && user == "zehra")) //false 