import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			orderList: []
		}
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onSubmitSignIn = () => {
		this.props.onRouteChange('home');
	// 	fetch('http://localhost:3000/register', {
	// 		method: 'post',
	// 		headers: {'Content-Type': 'application/json'},
	// 		body: JSON.stringify({
	// 			email: this.state.email,
	// 			password: this.state.password,
	// 			name: this.state.name,
	// 		})
	// 	})
	// 		.then(response => response.json())
	// 		.then(user => {
	// 			if(user) {
	// 				this.props.loadUser(user);
	// 				this.props.onRouteChange('home')
	// 			}
	// 		}
	// 	)
	}

	render() {
		return (
			<div>
				this is cart
			</div>
		)
	}
}

export default Register;