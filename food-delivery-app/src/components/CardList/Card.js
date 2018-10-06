import React from 'react';
import img1 from './images/img1.jpg'; // command option ] or [
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';


const Card = ({name, price, id}) => {
	const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='pic' src={images[id-1]} height='240' width='auto' />
			<div>
				<h2> {name} </h2>
				<p> Rs. {price} </p>
			</div>
		</div>
	)
}

export default Card;