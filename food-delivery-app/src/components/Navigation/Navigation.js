import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
	if(isSignedIn) {
		return (
			<div className='bb'>
			<nav style={{ display:'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('home')} className='f4 link dim black pa2 pointer'> HOME </p>
				<p onClick={() => onRouteChange('orders')} className='bl f4 link dim black pa2 pointer'> ORDERS </p>
				<p onClick={() => onRouteChange('signout')} className='bl f4 link dim black pa2 pointer'> SIGN OUT </p>
			</nav>
			</div>
		)
	}
	else {
		return (
			<div className='bb'>
			<nav style={{ display:'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signin')} className='f4 link dim black pa2 pointer'> SIGN IN </p>
				<p onClick={() => onRouteChange('register')} className='bl f4 link dim black pa2 pointer'> REGISTER </p>
			</nav>
			</div>
		)
	}
	
}

export default Navigation;