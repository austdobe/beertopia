import { SEARCH_BASE_URL } from './config';

const apiSettings = {
	fetchBeers: async (searchTerm, page) => {
		const endpoint = searchTerm
			? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
			: `${POPULAR_BASE_URL}&page=${page}`;
		return await (await fetch(endpoint)).json();
	},
};

export default apiSettings;
