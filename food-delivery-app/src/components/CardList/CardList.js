import React from 'react';
import Card from './Card';

const CardList = ( {foodItems , onRouteChange, onAdding} ) => {
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
						/>
					);
				})
			}
		</div> 
	)
}

export default CardList;