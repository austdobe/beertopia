import React from 'react';
import { Link } from 'react-router-dom';
//styles
import { Image, Wrapper, Text, Title } from './Thumb.styles';

const Thumb = ({ image, beerId, clickable, name, description }) => (
	<div>
		{clickable ? (
			<Wrapper>
				<Link to={`/${beerId}`}>
					<Image src={image} alt='beer-thumb' height='200px' width='300px' />
				</Link>
				<Title>{name}</Title>
				<Text>{description}</Text>
			</Wrapper>
		) : (
			<Wrapper>
				<Image src={image} alt='beer-thumb' />
				<Title>{name}</Title>
				<Text>{description}</Text>
			</Wrapper>
		)}
	</div>
);

export default Thumb;
