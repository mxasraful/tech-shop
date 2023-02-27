import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import ProductItem from '../../ProductItem/ProductItem';

const HomeProducts = ({ title, category, getDb, dbItems }) => {

    const [categoriesItems, setCategoriesItems] = useState(null)

    // Get Categoris Items
    useEffect(() => {
        if (category) {
            const dbRef = ref(getDatabase());
            get(child(dbRef, `items/`)).then((snapshot) => {
                if (snapshot.exists()) {
                    setCategoriesItems(snapshot.val());
                } else {
                    setCategoriesItems(null);
                }
            }).catch((error) => {
                setCategoriesItems(null);
            });
        }
    }, [category])

    useEffect(() => {

        const dbRef = ref(getDatabase());
        get(child(dbRef, `items/category/mobile`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                setCategoriesItems(null);
            }
        }).catch((error) => {
            setCategoriesItems(null);
        });
    }, [])

    return (
        <div className='home-prducts-main'>
            <div className="row pt-4">
                <h4>{title}</h4>
                {
                    getDb ?
                        <>
                            {
                                dbItems?.map(itemId => (
                                    <ProductItem item={null} itemId={itemId} />
                                ))
                            }
                        </>
                        :
                        <>
                            {
                                categoriesItems?.map(item => (
                                    <ProductItem item={item} itemId={null} />
                                ))
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default HomeProducts;