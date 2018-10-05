import React, { Component } from 'react';
import SignIn from './components/SignIn/SignIn';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Register from './components/Register/Register';
import './App.css';
import 'tachyons';

class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'signin',
			isSignedIn: false,
		}
	}

	onRouteChange = (route) => {
		if(route === 'signout') {
	      this.setState({isSignedIn:false})
	    } else if (route === 'home') {
	      this.setState({isSignedIn:true})
	    }
	    this.setState({route:route});
	}

	render() {
		return (
		  <div className="App">
		  	<div>
		  	<Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
		  	</div>
		  	{ ( this.state.route === 'home' ) ?
		  		<Logo /> :
		  		(this.state.route === 'signin') ?
		    	<SignIn onRouteChange={this.onRouteChange} /> :
		    	<Register onRouteChange={this.onRouteChange} />
			}
		  </div>
		);
	}
}

export default App;
