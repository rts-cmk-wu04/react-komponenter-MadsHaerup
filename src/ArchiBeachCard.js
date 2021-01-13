import './ArchiBeachCard.css';
function archiBeachCard({ item }) {
	return (
		<article className="archiBeachBlock">
			<img src={item.image} alt="" className="archiBeachBlock__image" />
			<h1 className="archiBeachBlock__title" style={{ color: item.color }}>
				{item.title}
			</h1>
			<p className="archiBeachBlock__description">{item.description}</p>
		</article>
	);
}

export default archiBeachCard;
