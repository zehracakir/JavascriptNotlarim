// for dongusu kullanımı

/* 
for(baslangicAtamasi; kosulIfadesi; arttirimIfadesi){
    yapilacak islemler
}
*/

// for(let i=0; i<10; i++){
//     console.log(i)
// }

// let i=0
// for(; i<10; i++){
//     console.log(i)
// }


let users=["Zehra", "Çakır", "SDU"]
const userList=document.querySelector("#userList")
let i=0
for(; i<users.length; i++){
    const liDOM=document.createElement("li")
    liDOM.innerHTML=users[i]
    userList.appendChild(liDOM)
}

