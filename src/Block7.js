import React, { useState, useEffect } from 'react';
import Block7Card from './Block7Card';
function Blocks7() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./block7.json')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<section className="blocks7">
			{items.map(function (item) {
				return <Block7Card key={item.title} item={item} />;
			})}
		</section>
	);
}

export default Blocks7;
