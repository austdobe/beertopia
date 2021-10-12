import { useState, useEffect, useRef } from 'react';
//API
import API from '../util/API';

const initialState = {
	page: 1,
	results: [],
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

			const beers = await API.fetchBeers(searchTerm, page);
			console.log(beers);

			setState((prev) => ({
				...beers,
				results: page > 1 ? [...prev, ...beers] : [...beers],
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

	// //Load More
	// useEffect(() => {
	// 	if (!isLoadingMore) return;

	// 	fetchBeer(state.page + 1, searchTerm);
	// 	setIsLoadingMore(false);
	// }, [isLoadingMore, searchTerm, state.page]);

	return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
