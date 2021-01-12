import React, { useState, useEffect } from 'react';
import LeisureCard from './LeisureCard';
function Leisure() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./leisure.json')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<section className="travelBlocks">
			{items.map(function (item) {
				return <LeisureCard key={item.title} item={item} />;
			})}
		</section>
	);
}

export default Leisure;
