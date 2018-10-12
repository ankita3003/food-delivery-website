import React from 'react';
import Tilt from 'react-tilt';
import food from './cutlery.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='flex ma2 mt0 pa2 justify-end'>
			<h1 className="f1"><em>Tomatoe</em></h1>
			<div className="pr4 pt5">
			<h3><em>Established 1889</em></h3>
			</div>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 120 }} >
 				<div className="Tilt-inner pa3"> 
 					<img style={{ paddingTop:'' }} alt='logo' src={food} /> 
 					<h3> Tomatoe </h3>
 				</div>
			</Tilt>
		</div>
	);
}

export default Logo;

