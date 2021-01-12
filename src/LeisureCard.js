import './LeisureCard.css';
function LeisureCard({ item }) {
	return (
		<article className="travelBlock" style={{ background: item.color }}>
			<img src={item.images[0]} alt="" className="travelBlock__image" />
			<div className="travelBlock__container">
				<p className="travelBlock__category">{item.category}</p>
				<h1 className="travelBlock__title">{item.title}</h1>
				<p className="travelBlock__description">{item.description}</p>
				<div className="travelBlock_imageContainer">
					<img src={item.images[1]} alt="" className="travelBlock__image" />
					<img src={item.images[2]} alt="" className="travelBlock__image" />
					<img src={item.images[3]} alt="" className="travelBlock__image" />
				</div>
			</div>
		</article>
	);
}

export default LeisureCard;
