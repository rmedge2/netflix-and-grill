// movie api 

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '797577513fmsh416afd2e0137296p1dee25jsn6deba288b462',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch('https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=tt0001702%2Ctt0001856%2Ctt0001856', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));