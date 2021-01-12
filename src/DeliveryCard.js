import './DeliveryCard.css';
function DeliveryCard({ item }) {
	return (
		<article className="deliveryBlock" style={{ background: item.color }}>
			<img src={item.image} alt="" className="deliveryBlock__image" />
			<h1 className="deliveryBlock__title">{item.title}</h1>
			<p className="deliveryBlock__description">{item.description}</p>
		</article>
	);
}

export default DeliveryCard;
