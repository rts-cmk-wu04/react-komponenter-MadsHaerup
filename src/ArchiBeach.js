import React, { useState, useEffect } from 'react';
import ArchiBeachCard from './ArchiBeachCard';
function ArchiBeach() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./archibeach.json')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<section className="archiBeachBlocks">
			{items.map(function (item) {
				return <ArchiBeachCard key={item.title} item={item} />;
			})}
		</section>
	);
}

export default ArchiBeach;
