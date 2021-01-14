import './LikeBtn.css';
import React from 'react';
import { BsHeartFill } from 'react-icons/bs';

class LikeButton extends React.Component {
	state = {
		liked: false,
	};

	toggleLike = () => {
		this.setState({
			liked: !this.state.liked,
		});
	};

	render() {
		const changeColour = this.state.liked ? 'red' : 'white';
		return (
			<button className="likeBtn" onClick={this.toggleLike}>
				<BsHeartFill style={{ color: changeColour }} />
			</button>
		);
	}
}
export default LikeButton;
