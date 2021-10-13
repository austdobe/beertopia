import React from 'react';

//components
import Grid from '../components/Grid';
import Header from '../components/Header';
import Thumb from '../components/Thumb';
import Spinner from '../components/Spinner';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import { About } from '../components/Thumb/Thumb.styles';

//Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
	const {
		state,
		loading,
		error,
		searchTerm,
		setSearchTerm,
		setIsLoadingMore,
		setIsLoadingPrev,
	} = useHomeFetch();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

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
			<Header />
			<SearchBar setSearchTerm={setSearchTerm} />
			<Grid header={searchTerm ? searchTerm : 'Page: ' + state.page}>
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
			{!loading && !searchTerm && (
				<About>
					<Button
						text='Previous'
						callback={() => {
							setIsLoadingPrev(true);
							scrollToTop();
						}}
					/>
					<Button
						text='Next'
						callback={() => {
							setIsLoadingMore(true);
							scrollToTop();
						}}
					/>
				</About>
			)}
		</>
	);
};

export default Home;
