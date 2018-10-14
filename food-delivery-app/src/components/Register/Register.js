import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: '',
			wrongInfo: false
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
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name,
			})
		})
			.then(response => response.json())
			.then(user => {
				if(user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange('home')
				} else {
					this.setState({wrongInfo:true})
				}
			}
		)
	 }

	render() {
		return (
			<div className="center pt5 pb5"  style={{background:'linear-gradient(89deg, #B4DFE5 0%, #D2FDFF 100%)'}}>
				{ (this.state.wrongInfo) ? 
					<div className="flex items-center justify-center pa4">
					  <span className="lh-title ml4">Wrong Information. Try Again !</span>
					</div> :
					<div></div>
				}
				<article className="br3 ba dark-gray b--black-10 shadow-5 center pa3">
					<main className="pa4 black-80">
					  <div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="dark-blue f1 fw6 ph0 mh0">Register</legend>
					      <div className="mt3">
					        <label className="dark-blue db fw6 lh-copy f6" htmlFor="name">Name</label>
					        <input 
					        	className="dark-blue pa2 input-reset ba bg-transparent hover-bg-dark-blue hover-white w-100" 
					        	type="text"
					        	name="name"
					        	id="name"
					        	onChange={this.onNameChange}
					        />
					      </div>
					      <div className="mt3">
					        <label className="dark-blue db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        	className="dark-blue pa2 input-reset ba bg-transparent hover-bg-dark-blue hover-white w-100" 
					        	type="email" 
					        	name="email-address"  
					        	id="email-address"
					        	onChange={this.onEmailChange} 
					        />
					      </div>
					      <div className="mv3">
					        <label className="dark-blue db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input 
					        	className="dark-blue b pa2 input-reset ba bg-transparent hover-bg-dark-blue hover-white w-100" 
					        	type="password" 
					        	name="password"  
					        	id="password"
					        	onChange={this.onPasswordChange} 
					        />
					      </div>
					    </fieldset>
					    <div className="">
					      <input 
					      	className="dark-blue b ph3 pv2 input-reset ba b--dark-blue bg-transparent grow pointer f6 dib" 
					      	type="submit"
					      	value="Register"
					      	onClick={this.onSubmitSignIn} 
					     />
					    </div>
					  </div>
					</main>
				</article>
			</div>
		)
	}
}

export default Register;