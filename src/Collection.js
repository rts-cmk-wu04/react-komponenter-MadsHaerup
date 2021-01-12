import React, { useState, useEffect } from 'react';
import CollectionCard from './CollectionCard';
function Collection() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./collection.json')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<section className="collectionBlocks">
			{items.map(function (item) {
				return <CollectionCard key={item.title} item={item} />;
			})}
		</section>
	);
}

export default Collection;
