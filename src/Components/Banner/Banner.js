import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {

    const [bannerLoading, setBannerLoading] = useState(false)
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

    console.log()

    return (
        <div className='banner-main mt-3'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 banner-slider">
                        <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                                {
                                    bannerItems && bannerItems.map(item => (
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={bannerItems.indexOf(item)} class={item.active && "active"} aria-current="true" aria-label={"Slide "+bannerItems.indexOf(item)+1}></button>
                                    ))
                                }
                            </div>
                            <div class="carousel-inner">
                                {
                                    bannerItems?.map(item => (
                                        <div className={item.nu === 1 ? "carousel-item active" : "carousel-item"}>
                                            <img src={item.bg} class="d-block w-100" alt="..." />
                                        </div>
                                    ))
                                }
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
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