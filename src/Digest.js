import React, { useState, useEffect } from 'react';
import DigestCard from './DigestCard';
function Digest() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./digest.json')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<section className="digestBlocks">
			<h1 className="digestBlocks__heading">news digest</h1>
			{items.map(function (item) {
				return <DigestCard key={item.title} item={item} />;
			})}
		</section>
	);
}

export default Digest;
