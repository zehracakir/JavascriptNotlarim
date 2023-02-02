// Fonksiyonlara parametreler atamak ve fonksiyondan geri dönüş almak

// Temel Kurallar 
// 1: Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir
// 2: Bir fonksisyon dışarı bilgi gönderebilir (return) veya göndermeyebilir
// 3: Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir

let firstName= "Zehra" //Bizi disariya bagimli kılıyor. Disariya bagimliligi azaltmak icin firstName i fonksiyona parametre olarak gonderebiliriz.
function greeting(){
    console.log(`Merhaba ${firstName}`);
}
greeting(); //parametre gonderilmeyen fonksiyon

function greeting(firstName1){ //default parametre alıyor
    console.log(`Merhaba ${firstName1}`);
}
greeting("Çakır"); //parametre gonderilen fonksiyon

function greeting2(firstName,lastName){
    let info=`Merhaba ${firstName} ${lastName}`
    return info

}
greeting2("Zehra","Ç") //bu bilgiyi yakalamamız lazım, disariya vermis
let info=greeting2("Zehra","Ç")
console.log(info)

function domIdWriteInfo(id,info){ //id ile bilgi gonderme
    let domObject=document.querySelector(`#${id}`)
    domObject.innerHTML=info;
}
domIdWriteInfo("greeting",greeting2("Zehra","Ç"))

let htmlInfo=`<span style="color:red">Color Red</span>`
domIdWriteInfo("greeting",htmlInfo)