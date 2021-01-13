import './GreeneryCard.css';
function GreeneryCard({ item }) {
	return (
		<article className="greeneryBlock">
			<img src={item.image} alt="" className="greeneryBlock__image" />
			<h1 className="greeneryBlock__title" style={{ color: item.color }}>
				{item.title}
			</h1>
			<p className="greeneryBlock__description">{item.description}</p>
		</article>
	);
}

export default GreeneryCard;
