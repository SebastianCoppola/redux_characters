import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// COMPONENTES
import Home from '../components/Home/Home';
import CharacterDetail from '../components/CharacterDetail/CharacterDetail';
import CharactersContainer from "../components/CharactersContainer/CharactersContainer";
import NotFound from '../components/commons/NotFound';

function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/characters' element={<CharactersContainer/>} />
				<Route path='/characters/:charID' element={<CharacterDetail/>}/>			
				<Route path='*' element={<NotFound/>}/>
			</Routes>			
		</Router>
	);
}

export default AppRoutes;