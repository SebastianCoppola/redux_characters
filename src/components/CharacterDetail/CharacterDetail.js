import React, { useEffect, useState } from 'react';
import Loading from '../commons/Loading'
import { Button, Box, Card, CardMedia, CardContent,Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchOneCharacter } from '../../redux/actions/actions';

const CardContainer = styled(Box)({
	width:'100%',
	display:'flex',
	flexDirection:'column',
	justifyContent:'center',
	alignItems:'center',
	padding:'50px 0 50px 0'
})

const CharDetailCard = styled(Card)({
	width:{sm:'90%',md:'70%'},
	maxHeight:'400px',
	display:'flex',
	boxShadow:'1px 1px 5px black'
})
const CardImg = styled(CardMedia)({
	width:{sm:'100%',md:'50%'},
	maxHeight:'400px',
	margin: 'auto',
	display:'flex',
})
const CardInfo = styled(CardContent)({
	width:{sm:'100%',md:'50%'},
	maxHeight:'400px',
	margin: 'auto',
	display:'flex',
})

const DetallePersonaje = () => {
	const dispatch = useDispatch();
	const selectedShow = useSelector(state => state.charactersData.tvShow);
	const character = useSelector(state => state.charactersData.character);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	const { charID } = useParams();


	useEffect(() => {
		dispatch(FetchOneCharacter(selectedShow,charID));
	}, [dispatch, charID]);

	useEffect(() => {
		if(selectedShow === 'bb'){
			if (character && character.length > 0) {
				setIsLoading(false);
			}
		}else if(selectedShow === 'got'){
			if (character) {
				setIsLoading(false);
			}
		}
	}, [character]);
	
	const goBack = () => {
		navigate(-1);
	}
	
	switch(selectedShow){
		case 'bb' :
		return (
			<CardContainer>
				{
					isLoading 
					? 
					<Loading />
					: 
					<CharDetailCard key={character[0].char_id}>
						<CardImg component="img" image={character[0].img} alt='img' />
						<CardInfo>
							<Typography component='span' color="text.secondary">
								<h3>Name: {character[0].name}</h3>
								<p>Birthday: {character[0].birthday}</p>
								<p>Occupation: {character[0].occupation}</p>
								<p>Status: {character[0].status}</p>
								<p>Nickname: {character[0].nickname}</p>
								<p>Seasons: {character[0].appearance}</p>
								<p>Protrayed: {character[0].portrayed}</p>
								<p>Category: {character[0].category}</p>
								<p>BetterCallSaul Seasons: {character[0].better_call_saul_appearance}</p>
							</Typography>
						</CardInfo>
					</CharDetailCard>
				}
				<Button onClick={goBack} sx={{color:'black',width:'fit-content'}}>GoBack</Button>
			</CardContainer>
		)
		case 'got':
		return (
			<CardContainer>
				{
					isLoading 
					? 
					<Loading />
					: 
					<CharDetailCard key={character.id}>
						<CardImg component="img" image={character.imageUrl} alt='img' />
						<CardInfo>
							<Typography component='span' color="text.secondary">
								<h3>Name: {character.fullName}</h3>
								<p>Title: {character.title}</p>
								<p>Family: {character.family}</p>
							</Typography>
						</CardInfo>
					</CharDetailCard>
				}
				<Button onClick={goBack} sx={{color:'black',width:'fit-content'}}>GoBack</Button>
			</CardContainer>
		)
	}
};

export default DetallePersonaje;
