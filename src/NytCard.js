import './NytCard.css';
function NytCard({ item }) {
	return (
		<article className="nytBlock" style={{ backgroundImage: `url(${item.bgImage})`, backgroundSize: 'cover' }}>
			<img src={item.image} alt="" className="nytBlock__image" />
			<h1 className="nytBlock__title">{item.title}</h1>
			<p className="nytBlock__description">{item.description}</p>
			<button className="nytBlock__btn" style={{ color: item.color }}>
				read more
			</button>
		</article>
	);
}

export default NytCard;
