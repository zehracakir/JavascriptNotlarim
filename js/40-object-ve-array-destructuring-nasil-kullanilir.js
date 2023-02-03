//object ve array destructuring nasil kullanilir

let settings = {
    userName: "zehraCakir",
    password: "sduBilgisayar",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "javascript.com"
}

//obje icindeki bilgilerin tek seferde cikarilmasi
//let userName= settings.userName
//console.log(userName)

// rename ve destructuring 
let {userName: user,password,isActive,ip,serverName}=settings
//console.log(userName,password,isActive,ip,serverName)
console.log(settings)
console.log(user)


//obje icindeki bazi bilgilerin cikarilmasi
let {userName:userName2,password:pasword2,isActive:isActive2,...newSettings}=settings //{} --> object oldugundan dolayi
console.log(userName2, pasword2, isActive2, newSettings)

//objenin destructuring ile kopyalanmasi

//HATALI
// let settings2=settings
// settings2.userName="yeni bilgi" //burada kopyalama degil de icerik degistirme var
// console.log("settings ",settings)
// console.log("settings2",settings2)

//destructuring yapisi
let settings2={...settings} //cikar kopyala diyoruz aslinda bu yapida
settings2.userName="yeni bilgi"
console.log("settings ",settings)
console.log("settings2",settings2)

let score= [100, 200, 300, 400]
let[score1, score2, ...otherScore]=score  //[] --> array oldugundan dolayi
console.log(score1, score2, otherScore)
//object kopyalama ile ayni
let copyOfScore = [...score]
console.log(copyOfScore)