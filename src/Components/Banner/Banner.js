import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get, push, update, query, limitToLast } from "firebase/database";
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'

const Banner = ({ setBannerLoading }) => {

    const [bannerItems, serBannerItems] = useState(null)
    const [bannerGetError, setBannerGetError] = useState(false)


    const featuredCategories = [
        {
            title: "IPhone",
            url: "/",
            rulesName: [
                "brand",
                "category"
            ],
            rulesValue: [
                "Apple",
                "mobile"
            ],
            rulesBreak: null
        },
        {
            title: "IPhone",
            url: "/",
            rulesName: [
                "brand",
                "category"
            ],
            rulesValue: [
                "Apple",
                "mobile"
            ],
            rulesBreak: null
        },
    ]


    // Get Items From Database
    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `banner/`)).then((snapshot) => {
            if (snapshot.exists()) {
                serBannerItems(snapshot.val());
                setBannerGetError(false);
                setBannerLoading(false)
            } else {
                setBannerGetError(true);
                serBannerItems(null);
                setBannerLoading(false)
            }
        }).catch((error) => {
            setBannerGetError(true);
            serBannerItems(null);
            setBannerLoading(false)
        });
    }, [])


    return (
        <div className='banner-main mt-3'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 banner-slider">
                        <Carousel>
                            {
                                bannerItems?.map(item => (
                                    <Link to={item.link && item.link} className="home-banner-carousel-item d-flex justify-content-center align-items-center">
                                        <img src={item.bg} alt="" />
                                        {
                                            item?.title &&
                                            <p className="legend home-banner-carousel-item-title">{item?.title}</p>
                                        }
                                    </Link>
                                ))
                            }
                        </Carousel>
                    </div>
                    <div className="col-sm-3 banner-cate">
                        <div class="list-group">
                            <Link to="/" class="list-group-item list-group-item-action" aria-current="true">Phone</Link>
                            <Link to="/" class="list-group-item list-group-item-action">IPhone</Link>
                            <Link to="/" class="list-group-item list-group-item-action">MacBook Air</Link>
                            <Link to="/" class="list-group-item list-group-item-action">MacBook Pro</Link>
                            <Link to="/" class="list-group-item list-group-item-action">Laptop</Link>
                            <Link to="/" class="list-group-item list-group-item-action">Gadgets</Link>
                            <Link to="/" class="list-group-item list-group-item-action">Monitor</Link>
                            <Link to="/" class="list-group-item list-group-item-action">PC</Link>
                            <Link to="/" class="list-group-item list-group-item-action">Smart Home Appliance</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;