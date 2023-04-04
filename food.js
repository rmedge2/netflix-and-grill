

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "c75ba3c861msh01fc0d0b12d2fabp1a6133jsndf3982f95ef3",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
};
//chinese
let posts = document.querySelector("#posts");
fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&tags=chinese", options)
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach(
            result => {
                console.log(result)
                let name = result.name
                let recipeHTML = 
                    `<h3 id="name">${name}</h3>
                    <img src="${result.thumbnail_url}" alt="" height='200px'>`
                let sec = document.createElement('section')
                sec.innerHTML = recipeHTML
                posts.append(sec)
            }
        )
    })
    .catch((err) => console.error(err));
//mexican
fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&tags=mexican", options)
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach(
            result => {
                console.log(result)
                let name = result.name
                let recipeHTML = 
                    `<h3 id="name">${name}</h3>
                    <a href="https://www.google.com/search?q=${name}"><img src="${result.thumbnail_url}" alt="" height='200px'>`
                let sec = document.createElement('section')
                sec.innerHTML = recipeHTML
                posts.append(sec)
            }
        )
    })
    .catch((err) => console.error(err));
//african
    fetch("https://tasty.p.rapidapi.com/recipes/list?from=1&size=3&tags=african", options)
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach(
            result => {
                console.log(result)
                let name = result.name
                let recipeHTML = 
                    `<h3 id="name">${name}</h3>
                    <img src="${result.thumbnail_url}" alt="" height='200px'>`
                let sec = document.createElement('section')
                sec.innerHTML = recipeHTML
                posts.append(sec)
            }
        )
    })
    .catch((err) => console.error(err));
