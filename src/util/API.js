import { SEARCH_BASE_URL, POPULAR_BASE_URL } from '../util/config';

const apiSettings = {
	fetchBeers: async (searchTerm, page) => {
		const endpoint = searchTerm
			? `${SEARCH_BASE_URL}?beer_name=${searchTerm}`
			: `${POPULAR_BASE_URL}?page=${page}&per_page=24`;
		return await (await fetch(endpoint)).json();
	},
	fetchBeer: async (beerId) => {
		const endpoint = `${POPULAR_BASE_URL}/${beerId}`;
		return await (await fetch(endpoint)).json();
	},
};

export default apiSettings;
