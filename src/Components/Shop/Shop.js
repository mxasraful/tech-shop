import React from 'react';
import './Shop.css'

const Shop = ({by}) => {

    return (
        <div className="shop-page-main">
            <div className="container mt-3 mb-5">
                <h3>Shop By {by}</h3>
            </div>
        </div>
    );
};

export default Shop;