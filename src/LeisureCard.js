import './LeisureCard.css';
function LeisureCard({ item }) {
	return (
		<article className="leisureBlock" style={{ background: item.color }}>
			<img src={item.images[0]} alt="" className="leisureBlock__image" />
			<div className="leisureBlock__container">
				<p className="leisureBlock__category">{item.category}</p>
				<h1 className="leisureBlock__title">{item.title}</h1>
				<p className="leisureBlock__description">{item.description}</p>
				<div className="leisureBlock_imageContainer">
					<img src={item.images[1]} alt="" className="leisureBlock__image" />
					<img src={item.images[2]} alt="" className="leisureBlock__image" />
					<img src={item.images[3]} alt="" className="leisureBlock__image" />
				</div>
			</div>
		</article>
	);
}

export default LeisureCard;
