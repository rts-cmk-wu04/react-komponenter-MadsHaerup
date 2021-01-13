import './TravelLeisureCard.css';
function TravelLeisureCard({ item }) {
	return (
		<article className="travelLeisureBlock">
			<img src={item.image} alt="" className="travelLeisureBlock__image" />
			<h1 className="travelLeisureBlock__title" style={{ color: item.color }}>
				{item.title}
			</h1>
			<p className="travelLeisureBlock__description">{item.description}</p>
		</article>
	);
}

export default TravelLeisureCard;
