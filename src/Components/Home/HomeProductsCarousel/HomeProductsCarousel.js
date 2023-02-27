import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeProductsCarousel.css";
import ProductItem from "../../ProductItem/ProductItem";


const HomeProductsCarousel = ({items}) => {

    const slides = items

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }

    return (
        <div className="mb-5" >
            <Slider {...settings}>
                {slides?.map((slide, index) => {
                    return (
                        <div key={index}>
                            <ProductItem itemId={slide} />
                        </div>
                    );
                })}
            </Slider>
        </div >
    );
}

export default HomeProductsCarousel;
