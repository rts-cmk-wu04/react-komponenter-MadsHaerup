import './DigestCard.css';
function DigestCard({ item }) {
	return (
		<article className="digestBlock">
			<p className="digestBlock__number" style={{ backgroundColor: item.color }}>
				{item.number}
			</p>
			<h1 className="digestBlock__title">{item.title}</h1>
			<p className="digestBlock__description">{item.description}</p>
		</article>
	);
}

export default DigestCard;
