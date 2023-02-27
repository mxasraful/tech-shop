import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import { useMainContext } from '../Context/Context';
import { getDatabase, ref, child, get } from "firebase/database";
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel';
import ProductItem from '../ProductItem/ProductItem';

const Home = () => {

    const [monitorItems, setMonitorItems] = useState()
    const [monitorItemsLoading, setMonitorItemsLoading] = useState(true)
    const [monitorItemsGetError, setMonitorItemsGetError] = useState(true)
    const [monitorItemsGetErrorMsg, setMonitorItemsGetErrorMsg] = useState(null)

    const { homeFItemsError, homeFitemsLoading, homeFItems } = useMainContext()

    const category = "mobile"

    // useEffect(() => {
    //     const dbRef = ref(getDatabase());
    //     get(child(dbRef, `items/${category}`)).then((snapshot) => {
    //         if (snapshot.exists()) {
    //             console.log(snapshot.val());
    //         } else {
    //             console.log("No data available");
    //         }
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    // }, [])


    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `items`)).then((snapshot) => {
            if (snapshot.exists()) {
                const cObjToArr = Object.entries(snapshot.val())
                let mitems = []
                cObjToArr.filter(it => it[1].category === "monitor" && mitems.push(it[1]))
                setMonitorItems(mitems);
                setMonitorItemsLoading(false)
                setMonitorItemsGetError(false)
                setMonitorItemsGetErrorMsg(null);
            } else {
                setMonitorItemsGetError(true)
                setMonitorItemsGetErrorMsg("No data available");
                setMonitorItemsLoading(false)
            }
        }).catch((error) => {
            setMonitorItemsGetError(true)
            setMonitorItemsGetErrorMsg(error.message);
        });
    }, [])


    console.log(monitorItems)

    return (
        <div className="home-main pb-5">
            <Banner />
            {
                homeFitemsLoading ?
                    <div className='d-flex justify-content-center' style={{ marginTop: "12%", marginBottom: "12%" }}>
                        <div class="spinner-border text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="container">
                        {
                            homeFItemsError ?
                                <div className="text-center">
                                    <span>Got Some Error.</span>
                                </div>
                                :
                                <>
                                    <h3 className='mt-4 mb-4'>Featured Products</h3>
                                    <div className="row">
                                        <HomeProductsCarousel items={homeFItems} />
                                    </div>
                                </>
                        }
                    </div>
            }
            <div className="mt-5 home-mobile-items">
                {
                    monitorItemsLoading ?
                        <div className='d-flex justify-content-center' style={{ marginTop: "12%", marginBottom: "12%" }}>
                            <div class="spinner-border text-secondary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        <div className="container">
                            {
                                monitorItemsGetError ?
                                    <div className="text-center">
                                        <span>{monitorItemsGetErrorMsg}</span>
                                    </div>
                                    :
                                    <>
                                        <h3 className='mt-4 mb-4'>Monitors</h3>
                                        <div className="row mb-5">
                                            {
                                                monitorItems?.map(it => (
                                                    <div className="col-sm-3 mb-3">
                                                        <ProductItem item={it} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </>
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Home;