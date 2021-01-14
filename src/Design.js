import React, { useState, useEffect } from 'react';
import DesignCard from './DesignCard';
function Design() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./design.json')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<section className="designBlocks">
			{' '}
			{items.map(function (item) {
				return <DesignCard key={item.title} item={item} />;
			})}
		</section>
	);
}

export default Design;
