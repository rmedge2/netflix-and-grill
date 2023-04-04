const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "879a4d0e03mshc29407a7de2dbaep143932jsna2d846789c8c",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
};
//chinese
let posts = document.querySelector("#posts");

let region = "";
let setChinese = () => {
    return (region = "chinese");
};
let setMexican = () => {
    return (region = "mexican");
};
let setAfrican = () => {
    return (region = "african");
};
let generate = () => {
    switch (region) {
        case "chinese":
            fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&tags=chinese", options)
                .then((response) => response.json())
                .then((data) => {
                    data.results.forEach((result) => {
                        console.log(result);
                        let name = result.name;
                        let recipeHTML = `<h3 id="name">${name}</h3>
                    <a href='https://tasty.co/recipe/${result.slug}'><img src="${result.thumbnail_url}" alt="" height='200px'>`;
                        let sec = document.createElement("section");
                        sec.innerHTML = recipeHTML;
                        posts.append(sec);
                    });
                })
                .catch((err) => console.error(err));
            break;
        case "mexican":
            fetch("https://tasty.p.rapidapi.com/recipes/list?from=1&size=3&tags=mexican", options)
                .then((response) => response.json())
                .then((data) => {
                    data.results.forEach((result) => {
                        console.log(result);
                        let name = result.name;
                        let recipeHTML = `<h3 id="name">${name}</h3>
                <a href='https://tasty.co/recipe/${result.slug}'><img src="${result.thumbnail_url}" alt="" height='200px'>`;
                        let sec = document.createElement("section");
                        sec.innerHTML = recipeHTML;
                        posts.append(sec);
                    });
                })
                .catch((err) => console.error(err));
            break;
        case "african":
            fetch("https://tasty.p.rapidapi.com/recipes/list?from=1&size=3&tags=african", options)
                .then((response) => response.json())
                .then((data) => {
                    data.results.forEach((result) => {
                        console.log(result);
                        let name = result.name;
                        let recipeHTML = `<h3 id="name">${name}</h3>
                    <a href='https://tasty.co/recipe/${result.slug}'><img src="${result.thumbnail_url}" alt="" height='200px'>`;
                        let sec = document.createElement("section");
                        sec.innerHTML = recipeHTML;
                        posts.append(sec);
                    });
                })
                .catch((err) => console.error(err));
            break;
    }
};
// fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&tags=chinese", options)
//     .then((response) => response.json())
//     .then((data) => {
//         data.results.forEach(
//             result => {
//                 console.log(result)
//                 let name = result.name
//                 let recipeHTML =
//                     `<h3 id="name">${name}</h3>
//                     <a href='https://tasty.co/recipe/${result.slug}'><img src="${result.thumbnail_url}" alt="" height='200px'>`
//                 let sec = document.createElement('section')
//                 sec.innerHTML = recipeHTML
//                 posts.append(sec)
//             }
//         )
//     })
//     .catch((err) => console.error(err));
// //mexican
// fetch("https://tasty.p.rapidapi.com/recipes/list?from=1&size=3&tags=mexican", options)
// .then((response) => response.json())
// .then((data) => {
//     data.results.forEach(
//         result => {
//             console.log(result)
//             let name = result.name
//             let recipeHTML =
//                 `<h3 id="name">${name}</h3>
//                 <a href='https://tasty.co/recipe/${result.slug}'><img src="${result.thumbnail_url}" alt="" height='200px'>`
//             let sec = document.createElement('section')
//             sec.innerHTML = recipeHTML
//             posts.append(sec)
//         }
//     )
// })
// .catch((err) => console.error(err));
// //african
// fetch("https://tasty.p.rapidapi.com/recipes/list?from=1&size=3&tags=african", options)
// .then((response) => response.json())
// .then((data) => {
//     data.results.forEach(
//         result => {
//             console.log(result)
//             let name = result.name
//             let recipeHTML =
//                 `<h3 id="name">${name}</h3>
//                 <a href='https://tasty.co/recipe/${result.slug}'><img src="${result.thumbnail_url}" alt="" height='200px'>`
//             let sec = document.createElement('section')
//             sec.innerHTML = recipeHTML
//             posts.append(sec)
//         }
//     )
// })
// .catch((err) => console.error(err));
