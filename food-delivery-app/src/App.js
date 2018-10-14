import React, { Component } from 'react';
import SignIn from './components/SignIn/SignIn';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Register from './components/Register/Register';
import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';
import Cart from './components/Cart/Cart';
import './App.css';
import 'tachyons';

const initialState = {
	route: 'signin',
	isSignedIn: false,
	cart: [],
	foodItems: [],
	user: {
	    id: '',
	    name: '',
	    email: '',
	    orders: 0,
	    joined: ''
	},
	searchfield: ''
}

class App extends Component {
	constructor() {
		super();
		this.state = initialState
	}

	componentDidMount() {
		fetch('http://localhost:3000/menu')
			.then(response => response.json())
			.then(response => {
				this.setState({ foodItems: response })
			})
		.catch(err => console.log('Error getting menu'));
	};

	onRouteChange = (route) => {
		if(route === 'signout') {
	      this.setState(initialState)
	      this.componentDidMount();
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

	loadUser = (data) => {
	    this.setState({user: {
	      id: data.id,
	      name: data.name,
	      email: data.email,
	      entries: data.entries,
	      joined: data.joined
	    }})
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
		  			<SearchBox searchChange={this.onSearchChange} name={this.state.user.name} /> 
		  			<Logo />
		  			<CardList foodItems={filteredItems} onRouteChange={this.onRouteChange} onAdding={this.onAdding} cart={this.state.cart} />
		  		</div> :
		  		(this.state.route === 'register') ?
		  		<div className="pa5">
		    	<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> 
		    	</div>:
		    	(this.state.route === 'orders')? 
		    	<div className='basket'>
		    	<Cart cart={this.state.cart} onOrder={this.onOrder} /> 
		    	</div>:
		    	<div className="pa5">
		    	<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
		    	</div>
			}
		  </div>
		);
	}
}

export default App;
