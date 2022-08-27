import * as React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const styles = {
	card:{
		width: '200px',
		height: '250px',
		position: 'relative',
		overflow: 'hidden',
		boxShadow: '1px 1px 5px black'
	},
	img:{
		width: '200px',
		height: '250px',
		objectFit: 'cover',
	},
	h2:{
		color: 'black',
		fontSize: '1.7em',
		zIndex: '-1',
		width: '90%',
		height: 'auto',
		position: 'absolute',
		top: '20px',
		left: '5px',
		margin: 'auto'
	}
}

export default function PersonajesUI({ data }) {
	const selectedShow = useSelector(state => state.charactersData.tvShow);
	switch(selectedShow){
		case 'bb' :
			return (
				<div style={styles.card}>
					<Link to={'/characters/' + data.char_id}>
						<img style={styles.img} src={data.img} alt='img' />
						<h2 style={styles.h2}>{data.name}</h2>
					</Link>
				</div>
			)
			case 'got':
				return (
				<div style={styles.card}>
					<Link to={'/characters/' + data.id}>
						<img style={styles.img} src={data.imageUrl} alt='img' />
						<h2 style={styles.h2}>{data.name}</h2>
					</Link>
				</div>
			)
	}
}

