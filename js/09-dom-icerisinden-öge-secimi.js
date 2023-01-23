// Dom içerisinden etiket ve id ile öge seçimi

// let h2=document.getElementsByTagName('h2')  //çok efektif bir çözüm olmadı
//getElementsByTagName ile sayfadaki tüm etiketleri de getirebiliriz:
// document.getElementsByTagName('*')
// Çıktı: HTMLCollection(33) [html, head, meta, link#.....


//innerHTML ile içerisinde yazan bilgiye ulaşırız. 
//getElementBYId ile öge secimi
let title=document.getElementById('title')
//console.log(title.innerHTML="Deneme") //hem eşitleme hem de yazdırma işlemi yapar, çok iyi bir kullanım değil
title.innerHTML="Degisen bilgi" //içerisindeki bilgiyi değiştirdik
console.log(title.innerHTML) //değişen bilgiyi ekrana yazdırdık

//querySelector ile öge secimi
let link=document.querySelector("ul#list>li>a") //querySelector bir tane eleman seçebilir.querySelectorAll hepsini seçer.
// console.log(link.innerHTML)
// link.innerHTML="Yeni link bilgisi"


// let link2=document.querySelector("ul#zehraList>li>a")
link.innerHTML+=" eklenen bilgi" //var olan link içerisindeki bilgiye ekleme yapar 

link.style.color="red" //renk bilgisi eklemek
link.classList.add('btn') //class eklemek
