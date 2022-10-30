import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BlogCoverCard.css";
import React from 'react';

const ImageSlider = ({images}) => {

const settings = {
	infinite: true,
	arrows: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	slickPrev: true,
	autoplay: true,
autoplaySpeed: 5000,

};
return (
	<>
	<section>
	<div className="imgslider" style={{
		marginLeft: 100,
		marginTop: -75,
		marginRight: 100,
	}}>
		<Slider {...settings}>
		{images.map((item) => (
			<div key={item.id} className="container">
			<img src={item.src} alt={item.alt} style={{
				height: "48.7vh",
				width: "100%",
				marginTop: 100,
			}} />
			<div className="top-left">
			<h1>article title</h1>
			</div>
			</div>
		))}
		</Slider>
	</div>
	</section>
		</>
)
}
export default ImageSlider;
