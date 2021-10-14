import React from 'react';
import { Link } from 'react-router-dom';

// style
import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = ({ title, beerTitle }) => (
	<Wrapper>
		<Content>
			<Link style={{ textDecoration: 'none' }} to='/home'>
				<span>{title}</span>
			</Link>
			<span> | </span>
			<span>{beerTitle}</span>
		</Content>
	</Wrapper>
);

export default BreadCrumb;
