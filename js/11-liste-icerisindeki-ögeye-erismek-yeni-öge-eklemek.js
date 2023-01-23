// liste icerisindeki ögeye erismek yeni öge eklemek

// getElementById ile
// let item = document.getElementById("list");

//getElementsByClassName ile
// let item  = document.getElementsByClassName("sinif");

// let item =document.querySelector("ul#list>li:last-child") //en sondaki li yi döndürür
// console.log(item)

// let item1 =document.querySelector("ul#list>li:first-child") //en bastaki li yi döndürür
// console.log(item1)i

// let item2 =document.querySelector("ul#list>li:first-child").innerText //en baştaki li nin icerisinde yazan text i döndürür
// console.log(item2)

// let item3 =document.querySelector("ul#list>li:first-child").innerText="değistii"//en bastaki li nin icerisinde yazan text i değistirir döndürür
// console.log(item3)

let item4 =document.querySelector("ul#list>li:first-child")//en bastaki li nin icerisinde yazan text degistirir ve döndürür
item4.innerHTML="ilk öge değisti"

let item5 =document.querySelector("ul#list>li:last-child")//en sondaki li nin icerisinde yazan text degistirir ve döndürür
item5.innerHTML="Son öge değisti"

//yeni bir öge eklemek
let ulDOM=document.querySelector("ul#list")
let liDOM=document.createElement('li') // createELement ile eleman ekliyoruz
liDOM.innerHTML="Kendi olusturdugum li"
ulDOM.append(liDOM) //append ile oluşturduğumuz elemanı en sona ekleriz

ulDOM.prepend(liDOM) //prepend ile oluşturduğumuz elemanı en başa ekler
