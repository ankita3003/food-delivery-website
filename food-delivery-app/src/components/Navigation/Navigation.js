import React from 'react';
import './Navigation.css';

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
			<div>
			<nav>
				<ul className="left pa3">
					<li className="link dim black b f6 f2-ns dib mr3">Tomatoe</li>
				</ul>
				<ul className="right">
					<li onClick={() => onRouteChange('signin')} className='f4 link dim black pa2 pointer'> SIGN IN </li>
					<li onClick={() => onRouteChange('register')} className='bl f4 link dim black pa2 pointer'> REGISTER </li>
				</ul>
			</nav>
			</div>
		)
	}
	
}

export default Navigation;