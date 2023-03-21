import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
	return (
		<div>
			<h2>Num of cake - {props.numOfCakes}</h2>
			<button onClick={props.buyCake}>Buy a cake 02</button>
		</div>
	);
}

// old solution !
const mapStateToProps = state => {
	return {
		numOfCakes: state.numOfCakes,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		buyCake: () => dispatch(buyCake()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
