import React from 'react';

const SearchBox = ( {searchChange } ) => {
	return (
		<div className='fl w-third pa2' style={{ justifyContent: 'flex-start'}}>
			<input 
				className='pa3 ba'
				type='search'
				placeholder='search dish'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;