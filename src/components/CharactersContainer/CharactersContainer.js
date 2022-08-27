import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchAllCharacters } from '../../redux/actions/actions';
import Loading from '../commons/Loading';
import CharacterCard from '../CharacterCard/CharacterCard';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import { Box } from '@mui/material'


const PersonajesContainer = () => {
	
	const dispatch = useDispatch();

	const selectedShow = useSelector(state => state.charactersData.tvShow);

	const characters = useSelector(state => state.charactersData.characters);
	const [isLoading, setIsLoading] = React.useState(true);

	var n = 0;

	useEffect(() => {
		dispatch(FetchAllCharacters(selectedShow));
	}
	, [dispatch,selectedShow]);

	useEffect(() => {
		if(characters.length > 0) {
			setIsLoading(false);
		}
	} , [characters]);

	return (
		<>
			<Header/>
			<Nav/>
			<Box 
				sx={{
					padding:'50px 0 50px 0',
					width:'90%',
					margin:'auto',
					display:'flex',
					flexWrap:'wrap',
					justifyContent:'center'
				}}
			>
				{ 
					isLoading ? <Loading/> :             
					characters.map(character => (
						<CharacterCard key={n++} data={character} />
					))
				}
			</Box>
		</>
	);
};


export default PersonajesContainer;