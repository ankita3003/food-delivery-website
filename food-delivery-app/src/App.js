import React, { Component } from 'react';
import SignIn from './components/SignIn/SignIn';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Register from './components/Register/Register';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
import dishes from './menu';
import './App.css';
import 'tachyons';

class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'signin',
			isSignedIn: false,
			foodItems: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		this.setState({ foodItems: dishes })
	};

	onRouteChange = (route) => {
		if(route === 'signout') {
	      this.setState({isSignedIn:false})
	    } else if (route === 'home') {
	      this.setState({isSignedIn:true})
	    }
	    this.setState({route:route});
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});	
	};

	render() {
		const { searchfield, foodItems } = this.state;
		const filteredItems = foodItems.filter(dish => {
			return dish.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return (
		  <div className="App">
		  	<Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
		  	{ ( this.state.route === 'home' ) ?
		  		<div id='search'>
		  			<SearchBox searchChange={this.onSearchChange} /> 
		  			<Logo />
		  			<CardList foodItems={filteredItems} />
		  		</div> :
		  		(this.state.route === 'register') ?
		    	<Register onRouteChange={this.onRouteChange} /> :
		    	<SignIn onRouteChange={this.onRouteChange} />
			}
		  </div>
		);
	}
}

export default App;
