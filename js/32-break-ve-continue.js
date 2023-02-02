// Break ve continue kullanimi

// break islemi durdur, continue devam et

const LOREM_LIST=[
    "lorem", "ipsum", "dolor", "sdü", "bilgisayar", "kod", "js"]
let counter=0
for(; counter<10; counter++){
    if(counter===5){
        break //5 gelince cikti
    }
    console.log(counter)
}
for(; counter<10; counter++){
    if(counter===5){
        continue // 5 i atlayip devam etti
    }
    console.log(counter)
}

const UL_DOM=document.querySelector("#userList")
for(let index=0; index<LOREM_LIST.length; index++){
    if(LOREM_LIST[index] == "dolor"){ //dolor a gelince bitirir
        break
    }
    let LI_DOM=document.createElement("li")
    LI_DOM.innerHTML=LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}


for(let index=0; index<LOREM_LIST.length; index++){
    if(LOREM_LIST[index] == "dolor"){ //dolor u atlayip devam eder
        continue
    }
    let LI_DOM=document.createElement("li")
    LI_DOM.innerHTML=LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}