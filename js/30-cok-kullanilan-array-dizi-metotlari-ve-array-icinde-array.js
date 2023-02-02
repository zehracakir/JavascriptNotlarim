// cok kullanilan array metotlari ve array icinde array

let items=[1, 2, 3, 4, 5]

//array icinde array
let femaleUsers= ["ayse", "fatma", "hayriye"]
let maleUsers=["ali", "ahmet", "mehmet"]

items.unshift(femaleUsers) //basa eklemek
console.log(items)

items.push(maleUsers) //sona eklemek
console.log(items)

//x elemani array de var mi ?
const arananElemanVar = items.includes("elma");
console.log("aranan eleman var mı : ",arananElemanVar);

console.log(items.length) //items ın boyutu 
// array icinde array de icerdeki her bir array 1 eleman olarak sayilir

console.log(items[0]) // (3)['ayse', 'fatma', 'hayriye']
console.log(items[0][0]) //ayse
console.log(items[0][1]) //fatma
console.log(items[0][2]) //hayriye
console.log(items[0].length) //array icindeki istedigimiz arrayin length bilgisine ulastik

//array icerisinden oge ayirmak
let newItems=items.splice(2,4)
console.log("newItems : ",newItems)
console.log("items : ",items)

//array icerisindeki ogenin index bilgisini bulmak
items.unshift("lorem")
items.push("zehra")
console.log(items)
console.log(items.indexOf("zehra"))

//array kopyalamak 
let copyItems=items
console.log(items)
copyItems.pop()
//burda iki array de de degisiklik oldu. Biz bunu istemiyoruz.
console.log(items)
console.log(copyItems)
//o zaman nasil yapmaliyiz ?
console.log("kopyalandiktan sonra : ")
copyItems=items.slice()
copyItems.pop()
console.log(items)
console.log(copyItems)

let es6Items=[...items] //es6 ve sonrasinde gelen kopyalama islemi. slice ın yerine bu da kullanilabilir.
console.log(es6Items)

//iki array bilgisini birlestirmek
let allUsers=[...femaleUsers,...maleUsers] //es6 iile arrayleri birlestirmek
console.log(allUsers)

//array icerisindeki bilgiyi stringe cevirmek
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))// birlestirme islemi yapabiliriz joinle

//istedigimiz index bilgisine gore oge eklemek
allUsers.splice(allUsers.length-1,0,"Melisa") //en sondaki elemandan bir önceki index e eleman ekledik
console.log(allUsers)