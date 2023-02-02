// array filter kullanımı
//5 harften fazla olanları istiyorum
const PRODUCTS=["laptop", "phone", "speaker", "desktop pc", "server", "mouse", "keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item=>item.length>5)
console.log(NEW_PRODUCTS)

//aktif kullanicilari bulmak istiyorum
const USERS=[
    {fullName: "Ayşe Sümer", isActive:false},
    {fullName: "Zehra ç", isActive:true},
    {fullName: "yusuf d", isActive:true},
    {fullName: "Ayça k", isActive:false}
]
const ACTIVE_USERS=USERS.filter(user=>user.isActive==true) //true istiyorsak true yazmasak da olur
console.log(ACTIVE_USERS)