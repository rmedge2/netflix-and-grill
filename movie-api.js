// movie api 

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '797577513fmsh416afd2e0137296p1dee25jsn6deba288b462',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};


// function getGenre()
fetch('https://moviesdatabase.p.rapidapi.com/titles/utils/genres', options)
	.then(response => {
		console.log(response.status)
		return response.json()})
	.then(response =>{

	console.log(response.results[1])
	
	// console.log(re[1])
	})
	.catch(err => console.error(err));


	// getting movies by genre