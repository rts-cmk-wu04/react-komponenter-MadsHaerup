import React, { useState, useEffect } from 'react';
import VRCard from './VRCard';
function VR() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./vr.json')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<section className="vrBlocks">
			{items.map(function (item) {
				return <VRCard key={item.title} item={item} />;
			})}
		</section>
	);
}

export default VR;
