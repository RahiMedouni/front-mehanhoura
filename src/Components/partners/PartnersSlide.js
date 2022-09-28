import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BlogCoverCard.css";
import React from 'react';

const PartnersSlide = ({images}) => {

const settings = {
	infinite: true,
	arrows: false,
	dots: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	lazyLoad: true,
	slickPrev: true,
	autoplay: true,
autoplaySpeed: 1500,

};
return (
	<>
	<section>
	<div className="imgslider" style={{
		marginLeft: 100,
		marginTop: 0,
		marginRight: 100,
	}}>
		<Slider {...settings}>
		{images.map((item) => (
			<div key={item.id} className="container">
			<img src={item.src} alt={item.alt} style={{
				height: "20vh",
				width: "50%",
				marginTop: 50,
			}} />
			</div>
		))}
		</Slider>
	</div>
	</section>
		</>
)
}
export default PartnersSlide;
