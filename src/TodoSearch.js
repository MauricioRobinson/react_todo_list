import React, { useState } from 'react';
import './TodoSearch.css';

function TodoSearch(props) {
	const [searchValue, setSearchValue] = useState('');

	const onSearchValueChange = (event) => {
		console.log(event.target.value);
		setSearchValue(event.target.value)
	};

	return (
		<div>
			<input
				className="TodoSearch"
				placeholder="Onion"
				value={searchValue}
				onChange={onSearchValueChange}
			/>
			<p>{searchValue}</p>
		</div>
	);
}

export { TodoSearch };
