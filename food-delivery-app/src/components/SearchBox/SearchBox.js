import React from 'react';

const SearchBox = ( {searchChange } ) => {
	return (
		<div className='debug-grid fl f3 w-20 pa2 pl6 mt5' style={{ justifyContent: 'flex-end'}}>
			<input 
				className='pa3 ba b--dark-blue bg-light-yellow'
				type='search'
				placeholder='Search dish'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;