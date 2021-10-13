import React from 'react';
import { useParams } from 'react-router-dom';
//config
// import { IMAGE_BASE_URL } from '../util/config';

//components
import BreadCrumb from '../components/BreadCrumb';
import Grid from '../components/Grid';
import Spinner from '../components/Spinner';
import BeerInfo from '../components/BeerInfo';
import BeerInfoBar from '../components/BeerInfoBar';
import Ingredient from '../components/Ingredient';

//hooks
import { useBeerFetch } from '../hooks/useBeerFetch';

//images
import NoImage from '../images/no_image.jpg';

const Beer = () => {
	const { beerId } = useParams();
	const { state: beer, loading, error } = useBeerFetch(beerId);

	if (loading) return <Spinner />;
	if (error) return <div>Opps... something went wrong</div>;

	console.log(beerId);
	console.log('beer.js ' + beer[0].ingredients);
	return (
		<>
			<BreadCrumb BeerTitle={beer[0].name} />
			<BeerInfo beer={beer[0]} />
			<BeerInfoBar
				ABV={beer[0].abv ? beer[0].abv : 'Not Provided'}
				IBU={beer[0].ibu ? beer[0].ibu : 'Not Provided'}
				attenuation={
					beer[0].attenuation_level ? beer[0].attenuation_level : 'Not Provided'
				}
			/>
			<Grid>
				<Grid header='Hops'>
					{beer[0].ingredients.hops.map((hops) => (
						<Ingredient
							name={hops.name}
							attribute={hops.attribute}
							add={hops.add}
						/>
					))}
				</Grid>
				<Grid header='Malt'>
					{beer[0].ingredients.malt.map((malt) => (
						<Ingredient name={malt.name} />
					))}
				</Grid>
				<Grid header='Yeast'>
					<Ingredient name={beer[0].ingredients.yeast} />
				</Grid>
			</Grid>
		</>
	);
};

export default Beer;
