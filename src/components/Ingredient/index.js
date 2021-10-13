import React from 'react';
//style
import { Wrapper } from './Ingredient.styles';

const Ingredient = ({ name, add, attribute }) => (
	<Wrapper>
		<h3>{name}</h3>
		<p>Time Added: {add ? add : 'Not Applicable'}</p>
		<p>Flavor Attribute: {attribute ? attribute : 'Not Applicable'}</p>
	</Wrapper>
);

export default Ingredient;
