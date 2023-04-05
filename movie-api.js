// movie api 

let genreForm = document.querySelector('form')
let genreInput = document.getElementById('genreInput')
let moviesContainer = document.getElementById('moviesContainer')
let movieCard = document.querySelector('.movieCard')

genreForm.addEventListener('submit', (event) => {
	event.preventDefault()
	let genre = genreInput.value
	console.log(genre)
	displayMovieOptions(genre)
})

function displayMovieOptions(x) {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '797577513fmsh416afd2e0137296p1dee25jsn6deba288b462',
			'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
		}
	};

	fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${x}&list=top_boxoffice_200&sort=year.decr&limit=50`, options)
		.then(response => response.json())
		.then(response => {
			console.log(response.results)
			console.log(response.results[0].titleText.text)
			console.log(response.results[0].primaryImage.url)
			response.results.forEach(element => {
				let movieCard = document.createElement('div')
				movieCard.innerHTML = `
				<div class="card" style="width: 18rem;">
								<img src=${element.primaryImage.url}
								class="card-img-top" alt="...">
								<div class="card-body">
									<h5 class="card-title">${element.titleText.text}</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Go somewhere</a>
								</div>
							</div>
				`
				moviesContainer.appendChild(movieCard)
		})
		// .catch(err => console.error(err));
	})
}


