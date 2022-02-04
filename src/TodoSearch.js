import React from 'react';
import './TodoSearch.css';

function TodoSearch(props) {
	const onSearchValueChange = (event) => {
		console.log(event.target.value);
	};

	return (
		<div>
			<input
				className="TodoSearch"
				placeholder="Onion"
				onChange={onSearchValueChange}
			/>
		</div>
	);
}

export { TodoSearch };
