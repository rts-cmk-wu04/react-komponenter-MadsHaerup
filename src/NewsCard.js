import './NewsCard.css';
function NewsCard({ item }) {
	return (
		<article className="newsBlock">
			<img src={item.image} alt="" className="newsBlock__image" />
			<div>
				<h1 className="newsBlock__title" style={{ color: item.color }}>
					{item.title}
				</h1>
				<p className="newsBlock__description">{item.description}</p>
			</div>
		</article>
	);
}

export default NewsCard;
