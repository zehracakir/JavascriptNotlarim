let ulDom = document.querySelector("#list")
let task = document.querySelector("#task")
let yeniGorev = task.value

ulDom.addEventListener("click",elemanSil)
function elemanEkle() {  
    if (yeniGorev.length === 0 || !yeniGorev.trim()) {
        console.log("boş")
    } else {
        localStorage.setItem(yeniGorev, yeniGorev)
        let li = document.createElement('li')
        li.innerHTML = `${localStorage.getItem(yeniGorev)}<span class="badge badge-primary badge-pill">
        <i class="fa-solid fa-trash-can">Sil</i>
      </span>`
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
        ulDom.append(li)
    }
}
function guncelle() {
    keys = Object.keys(localStorage)
    for (i = keys.length; i >= 0; i--) {
        let li = document.createElement('li')
        li.innerHTML = `${localStorage.getItem(keys[i])}<span class="badge badge-primary badge-pill">
        <i class="fa-solid fa-trash-can">Sil</i>
      </span>`
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
        if (localStorage.getItem(keys[i]) != null)
            ulDom.append(li)
    }
}
function elemanSil(event){
    if(event.target.className=='fa-solid fa-trash-can'){
        event.target.parentElement.parentElement.remove();
        let inner = event.target.parentElement.parentElement.innerHTML
        localStorage.elemanSil(inner.split("<span")[0])
    }
    else {
        event.target.classList.toggle('checked');
    }
}
