import React from 'react';
import BreadCrumb from '../components/BreadCrumb';

import Profile from '../components/Profile';
import WelcomeSection from '../components/WelcomeSection';

import BeerWelcome from '../images/BeerWelcome.jpg';

const LandingPage = () => (
	<>
		<WelcomeSection
			id='welcome'
			image={BeerWelcome}
			title='Beertopia'
			text=' Search through a beer catalog featuring hundreds of beer metrics and ingredients'
		/>
		<BreadCrumb title='See Beer Catalog' />
		<Profile />
	</>
);

export default LandingPage;
