import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer(props) {
	const [number, setNumber] = useState();
	return (
		<div>
			<h2>Num of cake - {props.numOfCakes}</h2>
			<input type="text" value={number} onChange={e => setNumber(e.target.value)}></input>
			<button onClick={() => props.buyCake(number)}>Buy {number} a cake 02</button>
		</div>
	);
}

// old solution !
const mapStateToProps = state => {
	return {
		numOfCakes: state.cake.numOfCakes,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		buyCake: number => dispatch(buyCake(number)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
