import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function HookCakeContainer() {
	const numOfCakes = useSelector(state => state.cake.numOfCakes);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Num of cake - {numOfCakes}</h2>
			<button onClick={() => dispatch(buyCake())}>Buy a cake 01</button>
		</div>
	);
}

export default HookCakeContainer;
