// Array-Dizi ile calismak

//array olusturmak
let domain="zehra"
let isActive=false
let items=[1, 2 ,3, isActive, domain]
console.log(items)


let emptyArray=[] //bos bir dizi

//array icerisindeki eleman/oge sayisini ogrenmek
console.log(items.length)

//array icindeki ilk elemani cagirmak
console.log(items[0])

//array icindeki son elemani cagirmak
console.log(items[items.length-1])

// degisken icindeki bilginin array olup olmaduğı bilgisini almak
console.log(typeof(items)) //object doner

console.log(Array.isArray(items)) //true

console.log("[]: ",Array.isArray([])) //true
console.log("1: ",Array.isArray(1)) //false
console.log("true: ",Array.isArray(true)) //false

//arrayin icindeki ortadaki elemanin cagirilmasi
console.log(items[Math.floor(items.length/2)])