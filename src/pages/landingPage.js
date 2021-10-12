import React from 'react';

//config
import { POSTER_SIZE } from '../util/config';

//components
// import HeroImage from './HeroImage';
import Grid from '../components/Grid';
import Thumb from '../components/Thumb';
import Spinner from '../components/Spinner';
// import SearchBar from './SearchBar';
import Button from '../components/Button';

//Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
	const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
		useHomeFetch();

	if (error)
		return (
			<div>
				Something went wrong.... Please try to reload, if you continue to have
				an issue, please contact austin.dober@gmail.com with information about
				the issue. Thank you for your presence.
			</div>
		);

	return (
		<>
			{/* <SearchBar setSearchTerm={setSearchTerm} /> */}
			<Grid header={searchTerm ? 'Search Results' : 'Popular Beer'}>
				{state.results.map((beers) => (
					<Thumb
						key={beers.id}
						clickable
						image={beers.image_url ? beers.image_url : NoImage}
						beerId={beers.id}
						name={beers.name}
						description={beers.tagline}
						abv={beers.abv ? beers.abv : 'Not Available'}
						ibu={beers.ibu ? beers.ibu : 'Not Available'}
					/>
				))}
			</Grid>
			{loading && <Spinner />}
			{/* {state.page < state.total_pages && !loading && ( */}
			<Button text='Load More' callback={() => setIsLoadingMore(true)} />
			{/* )} */}
		</>
	);
};

export default Home;
