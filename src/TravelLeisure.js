import React, { useState, useEffect } from 'react';
import TravelLeisureCard from './TravelLeisureCard';
function TravelLeisure() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./travelandleisure.json')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<section className="travelLeisureBlocks">
			{items.map(function (item) {
				return <TravelLeisureCard key={item.title} item={item} />;
			})}
		</section>
	);
}

export default TravelLeisure;
