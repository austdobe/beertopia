import React from 'react';
import { Link } from 'react-router-dom';
//style
import { Wrapper, Content, Text } from './WelcomeSection.style';

const WelcomeSection = ({ image, title, text }) => (
	<Link style={{ textDecoration: 'none' }} to={`/home`}>
		<Wrapper image={image}>
			<Content>
				<Text>
					<h1>{title}</h1>
					<p>{text}</p>
				</Text>
			</Content>
		</Wrapper>
	</Link>
);

export default WelcomeSection;
