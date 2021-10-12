import React from 'react';
import { Link } from 'react-router-dom';
//styles
import { Image, Wrapper, Text, Title, About } from './Thumb.styles';

const Thumb = ({ image, beerId, clickable, name, description, abv, ibu }) => (
	<div>
		{clickable ? (
			<Link to={`/${beerId}`}>
				<Wrapper>
					<Image
						src={image}
						alt='beer-thumb'
						max-height='200px'
						max-width='300px'
					/>
					<Title>{name}</Title>
					<Text>{description}</Text>
					<About>
						<Text>ABV: {abv} </Text>
						<Text>IBU: {ibu}</Text>
					</About>
				</Wrapper>
			</Link>
		) : (
			<Wrapper>
				<Image src={image} alt='beer-thumb' />
			</Wrapper>
		)}
	</div>
);

export default Thumb;
