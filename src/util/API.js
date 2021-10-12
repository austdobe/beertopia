import { SEARCH_BASE_URL, POPULAR_BASE_URL } from '../util/config';

const apiSettings = {
	fetchBeers: async (searchTerm, page) => {
		const endpoint = searchTerm
			? `${SEARCH_BASE_URL}/beer_name=${searchTerm}?page=${page}&per_page=24`
			: `${POPULAR_BASE_URL}?page=${page}&per_page=24`;
		return await (await fetch(endpoint)).json();
	},
	fetchMovie: async (beerId) => {
		const endpoint = `${SEARCH_BASE_URL}/ids${beerId}`;
		return await (await fetch(endpoint)).json();
	},
};

export default apiSettings;
