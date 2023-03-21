import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
	return (
		<div>
			<h2> Item - {props.item}</h2>
			<button onClick={props.buyItem}>Buy a Items</button>
		</div>
	);
}

// old solution !
const mapStateToProps = (state, props) => {
	console.log('%c 01 mapStateToProps ', 'color:green', props);
	const itemState = props.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;
	return {
		item: itemState,
	};
};

const mapDispatchToProps = (dispatch, props) => {
	const dispatchFunction = props.cake
		? () => {
				dispatch(buyCake());
		  }
		: () => {
				dispatch(buyIceCream());
		  };
	return {
		buyItem: dispatchFunction,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
