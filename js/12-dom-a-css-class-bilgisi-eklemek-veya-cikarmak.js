let greeting =document.querySelector("#greeting")
console.log(greeting.classList) //şu anda icerisi bos

greeting.classList.add("text-primary") //html dosyasında style ile renk ekledik
greeting.classList.add("title")
greeting.classList.add("new-info","second-class") //bu şekilde birden fazla class ekleyebiliriz

greeting.classList.remove("title","second-class") //birden fazla class silebiliriz bu şekilde
//olmayan bir class adı yazarsak hata döndürmez

//item() : HTML de class'ı verilen index sırasına göre döndürür. Eğer index, class length'inden (sayısından) daha büyük veya length'ine eşit olursa undefined döner.
let div = document.querySelector('#greeting');
div.classList.item(0);

//contains() : Element verilen class'ı içeriyorsa true, içermiyorsa false döner. Bu sayede bir işlem yaptırmadan önce kontrol edebiliriz.
let div0 = document.querySelector('#greeting');
div.classList.contains('zehra')


//Toggle() : classList.add() ve classList.remove() yöntemini aynı anda çağırmak yerine classList.toggle() yöntemini kullanılabilir.
let div1 = document.querySelector('#greeting');
div.classList.toggle('visible');

//replace() : Bir CSS sınıfını başka bir sınıfla değiştirmek için kullanılır.
let div2 = document.querySelector('#greeting');
div.classList.replace('text-primary','block');
//length() : Bir öğede bulunan sınıf sayısını bilmemizi sağlar.

console.log(greeting.classList)