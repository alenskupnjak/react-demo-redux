import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
	return (
		<div>
			<h2>Num of iceCream - {props.numOfIceCreams}</h2>
			<button onClick={props.buyIceCream}>Buy a Icecream 01</button>
		</div>
	);
}

// old solution !
const mapStateToProps = state => {
	return {
		numOfIceCreams: state.iceCream.numOfIceCreams,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		buyIceCream: () => dispatch(buyIceCream()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
