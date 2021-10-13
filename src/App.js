import React from 'react';
//routing
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Beer from './pages/Beer';
// import NotFound from './pages/NotFound';

//styles
import { GlobalStyle } from './GlobalStyles';

const App = () => (
	<Router>
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/home' element={<Home />} />
			<Route path='/:beerId' element={<Beer />} />
			{/* <Route path='/*' element={<NotFound />} /> */}
		</Routes>
		<GlobalStyle />
	</Router>
);

export default App;
