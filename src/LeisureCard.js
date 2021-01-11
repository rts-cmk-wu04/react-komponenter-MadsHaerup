import './LeisureCard.css';
function LeisureCard({ item }) {
	return (
		<article className="travelBlock" style={{ background: item.color }}>
			<img src={item.images[0]} alt="" className="travelBlock__image" />
			<p className="travelBlock__category">{item.category}</p>
			<h1 className="travelBlock__title">{item.title}</h1>
			<p className="travelBlock__description">{item.description}</p>
		</article>
	);
}

export default LeisureCard;
