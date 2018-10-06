import React from 'react';
import Card from './Card';

const CardList = ( {foodItems} ) => {
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
						/>
					);
				})
			}
		</div> 
	)
}

export default CardList;