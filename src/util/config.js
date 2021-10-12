//Config for punk api
//read more at punkapi.com/documentation

const API_URL = 'https://api.punkapi.com/v2/beers?';

//base search results
const SEARCH_BASE_URL = `${API_URL}`;

const POPULAR_BASE_URL = `${API_URL}`;

const IMAGE_BASE_URL = 'https://images.punkapi.com/v2/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
	SEARCH_BASE_URL,
	API_URL,
	POPULAR_BASE_URL,
	IMAGE_BASE_URL,
	BACKDROP_SIZE,
	POSTER_SIZE,
};
