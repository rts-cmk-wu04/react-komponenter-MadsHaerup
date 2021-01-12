import './CollectionCard.css';
function CollectionCard({ item }) {
	return (
		<article className="collectionBlock" style={{ background: item.color }}>
			<img src={item.image} alt="" className="collectionBlock__image" />
			<p className="collectionBlock__collection">{item.collection}</p>
			<img src={item.profileImage} alt="profileimage" className="collectionBlock__profileImage" />
			<h1 className="collectionBlock__title">{item.title}</h1>
			<p className="collectionBlock__author">{item.author}</p>
		</article>
	);
}

export default CollectionCard;
