import React, { useState, useEffect } from 'react';
import GreeneryCard from './GreeneryCard';
function Greenery() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./greenery.json')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<section className="greeneryBlocks">
			{items.map(function (item) {
				return <GreeneryCard key={item.title} item={item} />;
			})}
		</section>
	);
}

export default Greenery;
