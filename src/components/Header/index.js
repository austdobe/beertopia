import React from 'react';
import { Link } from 'react-router-dom';
//logos

//style
import { Wrapper, Content } from './header.styles';

const Header = () => (
	<Wrapper>
		<Content>
			<Link style={{ textDecoration: 'none' }} to='/'>
				<h1>Welcome to Beertopia</h1>
			</Link>
			<h2>Powered by Punk API</h2>
		</Content>
	</Wrapper>
);

export default Header;
