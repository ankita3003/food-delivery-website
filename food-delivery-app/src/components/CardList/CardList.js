import React from 'react';
import Card from './Card';

const CardList = ( {foodItems , onRouteChange, onAdding, cart} ) => {
	return (
		<div>
			{
				foodItems.map((dish,i) => {
					return (
						<Card 
							key={i} 
							id={foodItems[i].id}
							name={foodItems[i].name} 
							price={foodItems[i].price} 		
							onRouteChange = {onRouteChange}
							onAdding = {onAdding}
							cart = {cart}
						/>
					);
				})
			}
		</div> 
	)
}

export default CardList;