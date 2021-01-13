import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
function News() {
	var [items, setItem] = useState([]);
	useEffect(function () {
		fetch('./news.json')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setItem(data);
			});
	}, []);

	return (
		<section className="newsBlocks">
			<h1 className="newsBlocks__heading">lastest news</h1>
			{items.map(function (item) {
				return <NewsCard key={item.title} item={item} />;
			})}
		</section>
	);
}

export default News;
