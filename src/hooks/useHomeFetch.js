import { useState, useEffect, useRef } from 'react';
//API
import API from '../util/API';

const initialState = {
	page: 0,
	results: [],
};

export const useHomeFetch = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [isLoadingMore, setIsLoadingMore] = useState(false);
	const [isLoadingPrev, setIsLoadingPrev] = useState(false);

	console.log(state);

	const fetchBeer = async (page, searchTerm = '') => {
		try {
			setError(false);
			setLoading(true);

			const beers = await API.fetchBeers(searchTerm, page);
			console.log(beers);

			const timer = setTimeout(() => {
				setState(() => ({
					...beers,
					results: [...beers],
					page: page,
				}));
			}, 500);
			setLoading(false);
			return () => clearTimeout(timer);
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

	//More Beers
	useEffect(() => {
		if (!isLoadingMore) return;

		fetchBeer(state.page + 1, searchTerm);
		setIsLoadingMore(false);
		console.log(state.page);
	}, [isLoadingMore, searchTerm, state.page]);
	//Previous Beers
	useEffect(() => {
		if (!isLoadingPrev) return;

		fetchBeer(state.page > 1 ? state.page - 1 : state.page, searchTerm);
		setIsLoadingPrev(false);
	}, [isLoadingPrev, searchTerm, state.page]);

	return {
		state,
		loading,
		error,
		searchTerm,
		setSearchTerm,
		setIsLoadingMore,
		setIsLoadingPrev,
	};
};
