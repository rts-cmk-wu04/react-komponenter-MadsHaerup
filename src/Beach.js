import React, { useState, useEffect } from 'react';
import BeachCard from './BeachCard';
function Beach() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./beach.json')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<section className="beachBlocks">
			{items.map(function (item) {
				return <BeachCard key={item.title} item={item} />;
			})}
		</section>
	);
}

export default Beach;
