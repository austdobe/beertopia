import React from 'react';

//components
import Thumb from '../Thumb';
//config
// import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//image
import NoImage from '../../images/no_image.jpg';
//styles
import { Wrapper, Content, Text, Image } from './BeerInfo.styles';

const BeerInfo = ({ beer }) => (
	<Wrapper>
		<Content>
			<Image
				src={beer.image_url ? `${beer.image_url}` : NoImage}
				alt='beer-thumb'
			/>
			<Text>
				<h1> {beer.name} </h1>
				<p>{beer.description} </p>
			</Text>
			<Text>
				<h1> Food Pairing </h1>
				{beer.food_pairing.map((food) => (
					<p>{food}</p>
				))}
			</Text>
		</Content>
	</Wrapper>
);

export default BeerInfo;
