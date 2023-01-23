// number veri türü tanımlamak
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
console.log("fiyat :",price,
            "kdv oranı : ",tax,
            "kdv tutarı: ",priceTax,
            "Toplam Fiyat",total);

let stringNumber = "11";
console.log(stringNumber);
let newNumber = Number(stringNumber);
console.log(newNumber); // türü değişti
// arttırma ve azaltma işlemleri 
console.log("12",newNumber); // renkleri farklı görünüyor, türleri de farklı zaten

let counter = 320;
counter = counter + 1; // uzun yöntem
console.log(counter);

counter +=1;
console.log(counter); // kısa yöntem

counter++;
console.log(counter); // en kısa yöntem

counter--; // 1 azaltma
console.log(counter);
counter -=1; // 1 azaltma
console.log(counter);

counter *=10; // çarpma işlemi
console.log(counter);

counter /=10; // bölme işlemi
console.log(counter);


// işlem önceliği
console.log(2 + 3 * 10); // 32
console.log((2 + 3) * 10); // 50


// mod(kalan) alma %
// Örnekler üzerinden gidelim 
// 1-) sayı tek mi çift mi --> 0 ise çift, 1 ise tek
console.log(3 % 2); // kalan 1 olur
console.log(14 % 2); // kalan 0 olur

// 2-) 8 ürün alan koliye tüm ürünler sığıyor mu ?
console.log("kalan ürün sayısı :",18 % 8);


// üs alma **
console.log("normal çarpma ile",2 * 2 * 2 * 2);
console.log("üs alma ile",2 ** 4);

// aşağı yuvarlama işlemi --> Math.floor()
console.log("aşağı yuvarlama sonucu:",Math.floor(1.9)); // 1

// // yukarı yuvarlama işlemi --> Math.ceil()
console.log("yukarı yuvarlama sonucu:",Math.ceil(1.9)); // 2

// yakına yuvarlama işlemi --> Math.round()
console.log("yakına yuvarlama sonucu:",Math.round(1.5)); // 2
console.log("yakına yuvarlama sonucu:",Math.round(1.4)); // 1