//Arraye eleman eklemek cikarmak
let items=[10, 20, 30, 40]
console.log("items - ilk hali : ",items)

//arrayin sonuna eleman eklemek
items.push(50)
console.log(items)

//arrayin basina eleman eklemek
items.unshift(5)
console.log(items)

//arrayin sonundaki elemani cikarmak
let lastItem=items.pop() //elemani cikardik yakaladik degiskene atadık
console.log(items)
console.log(lastItem)

//arrayin basindaki elemani cikarmak
let firstItem=items.shift() //elemani cikardik yakaladik degiskene atadık
console.log(items)
console.log(firstItem)

//array icindeki ilk ogenin bilgisini degistirmek
items[0]=2;
console.log(items)

//array icindeki ilk ogenin bilgisini degistirmek
items[items.length-1]=80
console.log(items)