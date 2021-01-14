import React, { useState } from 'react';
import { SliderData } from './ImageSliderData';
import { CgLoadbar } from 'react-icons/cg';
import './ImageSlider.css';
import LikeButton from './LikeBtn';

const ImageSlider = () => {
	let [current, setCurrent] = useState(0);

	const firstSlide = () => {
		setCurrent((current = 0));
	};

	const middleSlide = () => {
		setCurrent((current = 1));
	};

	const lastSlide = () => {
		setCurrent((current = 2));
	};

	return (
		<section className="slider">
			<div className="btn__container">
				<CgLoadbar className="btn" onClick={firstSlide} />
				<CgLoadbar className="btn" onClick={lastSlide} />
				<CgLoadbar className="btn" onClick={middleSlide} />
			</div>
			{SliderData.map((slide, index) => {
				return (
					<div className={index === current ? 'slide active' : 'slide'} key={index}>
						{index === current && <img src={slide.image} alt="travel" className="slider__image" />}
						{index === current && <img src={slide.icon} alt="icon" className="slider__icon" />}
						{index === current && <p className="slider__author">{slide.author} </p>}
						{index === current && <h1 className="slider__title">{slide.title} </h1>}
						{index === current && <p className="slider__description">{slide.description} </p>}
						<LikeButton />
					</div>
				);
			})}
		</section>
	);
};

export default ImageSlider;
