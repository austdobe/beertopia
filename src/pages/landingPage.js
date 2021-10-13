import React from 'react';

import Profile from '../components/Profile';
import WelcomeSection from '../components/WelcomeSection';

import BeerWelcome from '../images/BeerWelcome.jpg';

const LandingPage = () => (
	<>
		<WelcomeSection
			id='welcome'
			image={BeerWelcome}
			title='Welcome to Beertopia'
			text=''
		/>
		<Profile />
	</>
);

export default LandingPage;
