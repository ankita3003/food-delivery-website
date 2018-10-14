import React from 'react';

const SearchBox = ( { searchChange , name} ) => {
	return (
		<div className='fl f3 w-40 pa2 pl6' style={{ justifyContent: 'flex-end'}}>
			<div className='pb3'>{ `Welcome ${name}, What would you like to have? `}</div>
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