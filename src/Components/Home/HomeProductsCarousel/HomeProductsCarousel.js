import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeProductsCarousel.css";
import ProductItem from "../../ProductItem/ProductItem";


const HomeProductsCarousel = ({ items, itemsId }) => {

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

    console.log(items)

    return (
        <div className="mb-5" >
            {
                items ?
                    <>
                        <Slider {...settings}>
                            {items?.map((slide, index) => {
                                console.log("slide", slide)
                                return (
                                    <div key={index}>
                                        <ProductItem item={slide} itemId={null} />
                                    </div>
                                );
                            })}
                        </Slider>
                    </>
                    :
                    <>
                        <Slider {...settings}>
                            {itemsId?.map((slide, index) => {
                                return (
                                    <div key={index}>
                                        <ProductItem item={null} itemId={slide} />
                                    </div>
                                );
                            })}
                        </Slider>
                    </>
            }
        </div >
    );
}

export default HomeProductsCarousel;
