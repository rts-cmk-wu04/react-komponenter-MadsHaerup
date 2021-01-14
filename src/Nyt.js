import React, { useState, useEffect } from 'react';
import NytCard from './NytCard';
function Nyt() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./nyt.json')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<section className="nytBlocks">
			{items.map(function (item) {
				return <NytCard key={item.key} item={item} />;
			})}
		</section>
	);
}

export default Nyt;
