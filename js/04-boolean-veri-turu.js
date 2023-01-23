// 0 ve 1 i anlamak
let isActive = false; // 0
isActive = true; // 1
console.log(isActive); // true 

let userName;
let isUserName = Boolean(userName); // false 
console.log(isUserName); // false döndü
console.log(Boolean("11")); // true
console.log(Boolean("")); // false
// Boolean içi boş olursa false, dolu olursa true döndürür.

userName = "user";
console.log("User Name :",Boolean(userName)); //true

// 0 ve -0 da Boolean false döndürür.
console.log(Boolean(0)); // false 
console.log(Boolean(-0)); // false
console.log(Boolean(-0.1)); // true

console.log(Boolean(5 == 5)); // 5, 5 e eşit mi --> true
console.log(Boolean(5 == 10)); // 5, 10 a eşit mi --> false

// karar yapıları
console.log("büyük mü",Boolean(userName.length > 0)); // true
