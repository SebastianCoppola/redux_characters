import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectShow } from '../../redux/actions/actions';

const styles = {
	nav: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(17, 13, 6)',
		marginTop: '0px',
		padding: '10px 0',
		boxShadow: '4px 3px 5px black',
		width:"100%",
		position:'sticky',
		top:'0',
		zIndex:999,
	},
	link:{
		margin: '0 15px',
		textDecoration: 'none',
		color: 'rgb(202, 197, 197)',
	}
}

const Nav = () => {
	const dispatch = useDispatch();
	const handleClick = (e) => {
		dispatch(selectShow(e.target.id))
	}

	return (
		<div style={styles.nav}>
			<Link to="/" style={styles.link }>HOME</Link>
			<Link to="/characters" id='bb' onClick={handleClick} style={styles.link}>BREAKING BAD</Link>
			<Link to="/characters" id='got' onClick={handleClick} style={styles.link}>GAME OF THRONES</Link>
		</div>
	);
};

export default Nav;
