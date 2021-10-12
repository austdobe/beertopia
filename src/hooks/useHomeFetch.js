import { useState, useEffect, useRef } from 'react';
//API
import API from '../API';

const initialState = {
	page: 0,
	results: [],
	total_pages: 0,
	total_results: 0,
};

export const useHomeFetch = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [isLoadingMore, setIsLoadingMore] = useState(false);

	console.log(state);

	const fetchBeer = async (page, searchTerm = '') => {
		try {
			setError(false);
			setLoading(true);

			const beer = await API.fetchBeer(searchTerm, page);

			setState((prev) => ({
				...beers,
				results:
					page > 1 ? [...prev.results, ...beers.results] : [...beers.results],
			}));
		} catch (error) {
			setError(true);
		}

		setLoading(false);
	};
	//Search
	useEffect(() => {
		setState(initialState);
		fetchBeer(1, searchTerm);
	}, [searchTerm]);

	//Load More
	useEffect(() => {
		if (!isLoadingMore) return;

		fetchBeer(state.page + 1, searchTerm);
		setIsLoadingMore(false);
	}, [isLoadingMore, searchTerm, state.page]);

	return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
