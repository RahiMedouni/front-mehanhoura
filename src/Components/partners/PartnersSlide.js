import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PartnersFooter.css";
import React from 'react';

const PartnersSlide = ({PartnersImages}) => {

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
	<div className="imgslider">
		<Slider {...settings}>
		{PartnersImages.map((item) => (
			<div key={item.id} className="container">
			<img src={item.src} alt={item.alt} />
			</div>
		))}
		</Slider>
	</div>
	</section>
		</>
)
}
export default PartnersSlide;
