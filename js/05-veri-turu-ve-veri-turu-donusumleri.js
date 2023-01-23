// Veri turunu ogrenmek ve veri turu donusumleri

// veri turunu ogrenmek "typeof",
let price = 111;
let stringPrice = "111";
let hasPassword = true;

console.log(
    "price :",typeof(price)
)
console.log(
    "stringPrice :",typeof(stringPrice)
)
console.log(
    "hasPassword :",typeof(hasPassword)
)

// string(metinsel) bilgileri int ve float a donusturmek
let number1 = "11";
number1 = parseInt(number1)
console.log(
    "number1 :",number1,typeof(number1)
) // number1 : 11 number

let number2 = "11px";
number2 = parseInt(number2)
console.log(
    "number2 :",number2,typeof(number2)
) // number2 : 11 number

let number3 = "px11px";
number3 = parseInt(number3)
console.log(
    "number3 :",number3,typeof(number3)
) // number3 : NaN number


let number4 = "11px";
number4 = Number(number4)
console.log(
    "number4 :",number4,typeof(number4)
) // number4 : NaN number
// Number; sadece sayı varsa çevrim yapabilir. Başka herhangi bir karakter varsa çevrim yapamaz.
let number5 = "11";
number5 = Number(number5)
console.log(
    "number5 :",number5,typeof(number5)
) // number5 : 11 number

let number6 = "11.4px";
number6 = parseFloat(number6)
console.log(
    "number6 :",number6,typeof(number6)
) // number6 : 11.4 number

// number veri tipinden string e donusturmek
let number7 = 55;
number7.toString()
console.log(typeof(number7)); // number 
number7 = number1.toString(); // number --> string
console.log(typeof(number7)); // string 

//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(0.5) //false
//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false
// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.

Number.isNaN(123) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true