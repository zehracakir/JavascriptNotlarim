// Local Storage Islemleri

let user={userName:"zehracakir",isActive:true}
// console.log(user)

// localStorage.setItem("userInfo",JSON.stringify(user))
// let userInfo=localStorage.getItem("userInfo")
// console.log(userInfo)
user=localStorage.getItem("user")
user=JSON.parse(localStorage.getItem("user"))
console.log(user.userName)
console.log(user.isActive)
