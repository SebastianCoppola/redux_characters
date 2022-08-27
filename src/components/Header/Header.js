import React from 'react';
import {Box} from '@mui/material';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';



import bb from '../../img/breakingbad.jpg';
import got from '../../img/gameofthrones.jpg'

const ImgBox = styled(Box)({
	maxWidth: '100%!important',
	maxHeight:'300px',
	display:'flex',
	flexDirection:'column',
	overflow:'hidden',
	margin:0,
	padding:'0!important',
	gap:'0'
})

const imgs = {bb,got};

const Header = () => {

	const selectedShow = useSelector(state => state.charactersData.tvShow);

	return (
		<ImgBox >
			<img src={imgs[selectedShow]} alt='img'/>
		</ImgBox>
	);
};

export default Header;
