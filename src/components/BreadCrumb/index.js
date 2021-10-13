import React from 'react';
import { Link } from 'react-router-dom';

// style
import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = ({ beerTitle }) => (
	<Wrapper>
		<Content>
			<Link to='/'>
				<span>Home</span>
			</Link>
			<span> | </span>
			<span>{beerTitle}</span>
		</Content>
	</Wrapper>
);

export default BreadCrumb;
