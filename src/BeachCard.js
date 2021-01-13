import './BeachCard.css';
function BeachCard({ item }) {
	return (
		<article className="beachBlock">
			<img src={item.image} alt="" className="beachBlock__image" />
			<h1 className="beachBlock__title" style={{ color: item.color }}>
				{item.title}
			</h1>
			<p className="beachBlock__description">{item.description}</p>
		</article>
	);
}

export default BeachCard;
