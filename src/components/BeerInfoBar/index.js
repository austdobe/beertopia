import React from 'react';

//style
import { Wrapper, Content } from './BeerInfoBar.styles';

const BeerInfoBar = ({ ABV, IBU, attenuation }) => (
	<Wrapper>
		<Content>
			<div className='column'>
				<p>Alcohol By Volume: {ABV}</p>
			</div>
			<div className='column'>
				<p>International Bitterness Units: {IBU}</p>
			</div>
			<div className='column'>
				<p>Attenuation Level: {attenuation}</p>
			</div>
		</Content>
	</Wrapper>
);

export default BeerInfoBar;
