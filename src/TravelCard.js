import './TravelCard.css';
function TravelCard({ item }) {
	return (
		<article className="travelBlock" style={{ background: item.color }}>
			<img src={item.image} alt="" className="travelBlock__image" />
			<p className="travelBlock__category">{item.category}</p>
			<h1 className="travelBlock__title">{item.title}</h1>
			<p className="travelBlock__description">{item.description}</p>
		</article>
	);
}

export default TravelCard;
