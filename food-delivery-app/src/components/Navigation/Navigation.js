import React from 'react';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
	if(isSignedIn) {
		return (
			<div>
			<nav style={{ display:'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('home')} className='dark-blue f4 link dim black pa2 pointer'> HOME </p>
				<p onClick={() => onRouteChange('orders')} className='dark-blue bl f4 link dim black pa2 pointer'> ORDERS </p>
				<p onClick={() => onRouteChange('signout')} className='dark-blue bl f4 link dim black pa2 pointer'> SIGN OUT </p>
			</nav>
			</div>
		)
	}
	else {
		return (
			<div>
			<nav>
				<ul className="left pa3">
					<li className="dark-blue link dim black b f6 f2-ns dib mr3">Tomatoe</li>
				</ul>
				<ul className="right">
					<li onClick={() => onRouteChange('signin')} className='dark-blue f4 link dim black pa2 pointer'> SIGN IN </li>
					<li onClick={() => onRouteChange('register')} className='dark-blue bl f4 link dim black pa2 pointer'> REGISTER </li>
				</ul>
			</nav>
			</div>
		)
	}
	
}

export default Navigation;