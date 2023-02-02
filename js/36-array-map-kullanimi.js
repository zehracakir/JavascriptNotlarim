//array map kullanimi
const USERS=["AYSE", "MehMet", "TugCe", "AkSEL"]
//userName icinde orijinal isim kalsin
//shortName icinde ilk harf buyuk
//newName icinde ilk harf buyuk olsun

const NEW_USERS=USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)

const USERS_OBJECT=USERS.map(item=>
    {

        return {userName: item, shortName: `${item[0]}`, newName:`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
    })
    console.log(USERS_OBJECT)