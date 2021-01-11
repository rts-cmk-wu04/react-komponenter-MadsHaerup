import React, { useState, useEffect } from 'react';
import TravelCard from './TravelCard';
function Travel() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./travel.json')
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
				return <TravelCard key={item.title} item={item} />;
			})}
		</section>
	);
}

export default Travel;
