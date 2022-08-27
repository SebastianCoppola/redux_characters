import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { selectShow } from '../../redux/actions/actions';

import bb from '../../img/breakingbad.jpg';
import got from '../../img/gameofthrones.jpg'

const MainBox = styled(Container)({
	maxWidth: '100%!important',
	height:'100vh',
	display:'flex',
	flexDirection:'column',
	overflow:'hidden',
	margin:0,
	padding:'0!important',
	gap:'0'
})
const ImgBox = styled(Box)({
	width: '100%',
	height: '50%',
	objectFit: 'cover',
	'&:hover':{
		right:1,
		width:'101%',
		transition:'2s',
	}
})
const imgStyle = {
	width:'100%',
	'&:hover':{
		opacity:'.5',
	}
}

const Home = () => {
	const dispatch = useDispatch();


	const handleClick = (e) => {
		dispatch(selectShow(e.target.id))
	}

	return (
		<MainBox>
			<ImgBox>
				<Link to='/characters' onClick={handleClick}>
					<img style={imgStyle} src={bb} id='bb' alt='img' />
				</Link>
			</ImgBox>
			<ImgBox>
				<Link to='/characters' onClick={handleClick}>
					<img style={imgStyle} src={got} id='got' alt='img' />
				</Link>
			</ImgBox>				
		</MainBox>
	);
};

export default Home;
