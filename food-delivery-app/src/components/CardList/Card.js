import React from 'react';

const Card = ({name, price, id}) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='pic' src='' />
			<div>
				<h2> {name} </h2>
				<p> {price} </p>
			</div>
		</div>
	)
}

export default Card;