console.log(document.URL); // http://127.0.0.1:5500/index.html
console.log(document.location); // host, hostname vs şeylere ulaşırız.
console.log(document.location.hostname); // 127.0.0.1
console.log(document.location.pathname);  // /index.html
console.log(document.body); // dokumanin body kısmına ulaşırız
console.log(document.head); // dokumanin head kısmına ulaşırız
console.log(document.baseURI); // http://127.0.0.1:5500/index.html

document.body.style.backgroundColor = "aqua"; // document üzerinden body nin arka plan rengini aqua olarak değiştirdik
// renk değiştirme vs gibi işlemleri css ile de yapabiliriz fakat javascript bize dinamiklik sağlar.

