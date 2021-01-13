import './VRCard.css';
function VRCard({ item }) {
	return (
		<article className="vrBlock">
			<div className="vrBlock__mark">
				<svg xmlns="http://www.w3.org/2000/svg" width="10.07" height="27.004" viewBox="0 0 10.07 27.004">
					<path
						id="Path_19"
						data-name="Path 19"
						d="M381.951,2543v27l5.082-5.734,4.988,5.734v-27Z"
						transform="translate(-381.951 -2543)"
						fill="red"
					/>
				</svg>
			</div>
			<img src={item.image} alt="" className="vrBlock__image" />
			<h1 className="vrBlock__title" style={{ color: item.color }}>
				{item.title}
			</h1>
			<p className="vrBlock__description" style={{ color: item.secondaryColor }}>
				{item.description}
			</p>
		</article>
	);
}

export default VRCard;
