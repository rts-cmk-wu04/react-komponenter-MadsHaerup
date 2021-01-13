import './Block7Card.css';
function Block7Card({ item }) {
	return (
		<article className="block7">
			<img src={item.image} alt="" className="block7__image" />
			<div>
				<h1 className="block7__title" style={{ color: item.color }}>
					{item.title}
				</h1>
				<p className="block7__description">{item.description}</p>
			</div>
		</article>
	);
}

export default Block7Card;
