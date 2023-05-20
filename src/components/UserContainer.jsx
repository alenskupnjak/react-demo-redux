import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContainer({ userData, fetchUsers }) {
	useEffect(() => {
		fetchUsers();
		return () => {
			console.log('%c 17 ', 'color:red');
		};
	}, []);

	return userData.loading ? (
		<h2>Loading data</h2>
	) : userData.error ? (
		<h2>{userData.error}</h2>
	) : (
		<div>
			<h2>User List</h2>
			<div>
				{userData?.users &&
					userData.users.map(user => {
						console.log('%c user = ', 'color:green', user);

						return <p>{user.name}</p>;
					})}
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		userData: state.user,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchUsers: () => dispatch(fetchUsers()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
