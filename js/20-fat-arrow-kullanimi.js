// Fat Arrow () => Fonksiyonu Kullanımı

function hello(name){
    console.log(name)
}
hello("Javascript");
// bu fonksiyonu arrow function olarak aşağıda yazalım
const helloFuncV1=(name)=>{
    console.log(name)
}
helloFuncV1("Merhaba")

const helloFuncV2=(name,surname)=>{
    console.log(name,surname)
}
helloFuncV2("zehra","çakır")

const helloFuncV3=(name,surname)=>{
    let info=name+surname
    console.log(info)
}
helloFuncV3("zehra1","çakır1")