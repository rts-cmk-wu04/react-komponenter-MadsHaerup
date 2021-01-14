import './DesignCard.css';
function DesignCard({ item }) {
	return (
		<article className="designBlock" style={{ background: item.color }}>
			<img src={item.image} alt="" className="designBlock__image" />
			<p className="designBlock__title">{item.title}</p>
		</article>
	);
}

export default DesignCard;
