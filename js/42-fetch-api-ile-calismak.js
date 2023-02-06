// fetch api ile calismak

//json dosyadan veri cektik
fetch("data/settings.json").then(
    response=>{
        return response.json()
    }
    ).then(responseJson => {
        console.log(responseJson)
    })

// api uzerinden veri cektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response=>response.json
    ).then(responseJSON => {console.log(responseJSON[0])})