import { useState, useEffect } from 'react';
import API from '../util/API';

export const useBeerFetch = (beerId) => {
	const [state, setState] = useState({});
	const [loading, setLoading] = useState({});
	const [error, setError] = useState({});

	useEffect(() => {
		const fetchBeer = async () => {
			try {
				setLoading(true);
				setError(false);

				const beer = await API.fetchBeer(beerId);
				console.log(beer);
				setState({
					...beer,
				});

				setLoading(false);
			} catch (error) {
				setError(true);
			}
		};

		fetchBeer();
	}, [beerId]);

	return { state, loading, error };
};
