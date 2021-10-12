import React from 'react';

//config
import { POSTER_SIZE } from '../util/config';

//components
// import HeroImage from './HeroImage';
import Grid from '../components/Grid';
import Thumb from '../components/Thumb';
// import Spinner from './Spinner';
// import SearchBar from './SearchBar';
// import Button from './Button';

//Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
	const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
		useHomeFetch();

	if (error) return <div>Something went wrong ....</div>;

	return (
		<>
			<div>Home page</div>
			{/* <SearchBar setSearchTerm={setSearchTerm} /> */}
			<Grid header={searchTerm ? 'Search Results' : 'Popular Beer'}>
				{state.results.map((beers) => (
					<Thumb
						key={beers.id}
						clickable
						image={beers.image_url ? beers.image_url : NoImage}
						beerId={beers.id}
					/>
				))}
			</Grid>
		</>
	);
};

export default Home;
