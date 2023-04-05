// movie api 

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '797577513fmsh416afd2e0137296p1dee25jsn6deba288b462',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

//will add string literal in place of genre
fetch('https://moviesdatabase.p.rapidapi.com/titles?genre=drama&list=top_boxoffice_200', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


	// getting movies by genre