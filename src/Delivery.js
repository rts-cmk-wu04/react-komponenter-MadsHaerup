import React, { useState, useEffect } from 'react';
import DeliveryCard from './DeliveryCard';
function Delivery() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./delivery.json')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<section className="deliveryBlocks">
			{' '}
			{items.map(function (item) {
				return <DeliveryCard key={item.title} item={item} />;
			})}
		</section>
	);
}

export default Delivery;
