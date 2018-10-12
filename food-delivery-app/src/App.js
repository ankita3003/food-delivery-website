import React, { Component } from 'react';
import SignIn from './components/SignIn/SignIn';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Register from './components/Register/Register';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
import Cart from './components/Cart/Cart';
import dishes from './menu';
import './App.css';
import 'tachyons';

class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'signin',
			isSignedIn: false,
			cart: [],
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
	    } else if (route === 'orders') {
	    	this.setState({isSignedIn:true})
	    }
	    this.setState({route:route});
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});	
	};

	onAdding = (order) => {
		this.setState({
			cart: [...this.state.cart, order]
		})
	}

	onOrder = () => {
		this.setState({
			cart:[]
		})
	}

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
		  			<CardList foodItems={filteredItems} onRouteChange={this.onRouteChange} onAdding={this.onAdding} cart={this.state.cart} />
		  		</div> :
		  		(this.state.route === 'register') ?
		  		<div className="pa5">
		    	<Register onRouteChange={this.onRouteChange} /> 
		    	</div>:
		    	(this.state.route === 'orders')? 
		    	<div className='basket'>
		    	<Cart cart={this.state.cart} onOrder={this.onOrder} /> 
		    	</div>:
		    	<div className="pa5">
		    	<SignIn onRouteChange={this.onRouteChange} />
		    	</div>
			}
		  </div>
		);
	}
}

export default App;
