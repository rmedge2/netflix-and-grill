// movie api 

let genreForm = document.querySelector('form')
let genreInput = document.getElementById('genreInput')

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '797577513fmsh416afd2e0137296p1dee25jsn6deba288b462',
// 		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
// 	}
// };

// fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=Action&list=top_boxoffice_200&sort=year.decr&limit=50`, options)
// 	.then(response => response.json())
// 	.then(response => {
// 		console.log(response.results[0])})
// 	.catch(err => console.error(err));

	// getting movies by genre

<<<<<<< HEAD
//will add string literal in place of genre
fetch('https://moviesdatabase.p.rapidapi.com/titles?genre=drama&list=top_boxoffice_200', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
=======

	genreForm.addEventListener('submit', (event)=>{
		event.preventDefault()
		let genre = genreInput.value
		console.log(genre)
		displayMovieOptions(genre)
	})
>>>>>>> upstream/main

	function displayMovieOptions(x){
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
				console.log(response.results[0])})
			.catch(err => console.error(err));
		
	}
// displayMovieOptions()

