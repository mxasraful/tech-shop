import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMainContext } from '../Context/Context';
import ProductItem from '../ProductItem/ProductItem';
import './Shop.css'

const Shop = ({ by }) => {

    const [itemsForShow, setItemsForShow] = useState(null)

    const [filterPriceStart, setFilterPriceStart] = useState(0)
    const [filterPriceEnd, setFilterPriceEnd] = useState(10000000)
    const [filterBrandItems, setFilterBrandItems] = useState(null)
    const [filterBrand, setFilterBrand] = useState(null)
    const [filterAvailability, setFilterAvailability] = useState(null)


    const { itemsLoading, items, itemsGetError, } = useMainContext()

    const params = useParams()

    // Collect All Available Brands Form Products
    useEffect(() => {
        if (items) {
            const cObjToArr = Object.entries(items)
            for (let i = 0; i < cObjToArr.length; i++) {
                const element = cObjToArr[i][1].brand;
                if (!filterBrandItems?.find(it => it === element)) {
                    if (filterBrandItems) {
                        setFilterBrandItems([...filterBrandItems, element])
                    } else {
                        setFilterBrandItems([element])
                    }
                }
            }
        }
    }, [filterBrandItems, items])


    // Handle Default Filter
    useEffect(() => {
        if (params?.categoryOrBrand === "brand") {
            if (items) {
                const objToArr = Object.entries(items)
                const filterByBrand = objToArr.filter(it => it[1].brand.toLowerCase() === params.categoryName.toLowerCase())
                setItemsForShow(filterByBrand)
            }
        } else if (params?.categoryOrBrand === "category") {
            if (items) {
                const objToArr = Object.entries(items)
                const filterByBrand = objToArr.filter(it => it[1].category?.toLowerCase() === params.categoryName.toLowerCase())
                setItemsForShow(filterByBrand)
            }
        }
    }, [items, params])

    return (
        <div className="shop-page-main">
            <div className="container mt-3 mb-5">
                <h3>Shop By {by}</h3>
                <div className="row">
                    <div className="col-md-3">
                        <button class="filter-offcanvas-toggler btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="me-3">Filter</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>
                        <div class="offcanvas offcanvas-start filter-offcanvas" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="border rounded bg-light">
                                <div class="offcanvas-header">
                                    <button type="button" class="btn-close filter-offcanvas-close-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body ">
                                    <div className="mt-3 filter-offcanvas-price-range">
                                        <h5>Price Range</h5>
                                        <div className="d-flex">
                                            <div class="input-group input-group-sm mb-3 me-1">
                                                <span class="input-group-text" id="inputGroup-sizing-sm">From</span>
                                                <input type="number" class="form-control" aria-label="Sizing example input" value={filterPriceStart} onChange={(e) => setFilterPriceStart(e.target.value)} aria-describedby="inputGroup-sizing-sm" />
                                            </div>
                                            <div class="input-group input-group-sm mb-3">
                                                <span class="input-group-text" id="inputGroup-sizing-sm">To</span>
                                                <input type="number" class="form-control" aria-label="Sizing example input" v value={filterPriceEnd} onChange={(e) => setFilterPriceEnd(e.target.value)} aria-describedby="inputGroup-sizing-sm" />
                                            </div>
                                        </div>
                                        <button className="btn btn-danger btn-sm px-4">Find</button>
                                    </div>
                                    <div className="mt-4 filter-offcanvas-availability">
                                        <h5>Availability</h5>
                                        <div className="">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="filterOffcanvasAvailabilityInStock" />
                                                <label class="form-check-label" for="filterOffcanvasAvailabilityInStock">
                                                    In Stock
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="filterOffcanvasAvailabilityOutOfStock" />
                                                <label class="form-check-label" for="filterOffcanvasAvailabilityOutOfStock">
                                                    Out Of Stock
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Brand</h5>
                                        {
                                            itemsLoading ?
                                                <div className='d-flex justify-content-center' style={{ marginTop: "25%", marginBottom: "25%" }}>
                                                    <div class="spinner-border text-secondary" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                                :
                                                <div className="">
                                                    {
                                                        filterBrandItems?.map(it => (
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="" id={"filterOffcanvasBrand" + it} />
                                                                <label class="form-check-label" for={"filterOffcanvasBrand" + it}>
                                                                    {it}
                                                                </label>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        {
                            itemsLoading ?
                                <div className='d-flex justify-content-center' style={{ marginTop: "25%" }}>
                                    <div class="spinner-border text-secondary" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                :
                                <>
                                    {
                                        itemsGetError ?
                                            <div className='d-flex justify-content-center align-items-center' style={{ marginTop: "10%", marginBottom: "10%" }}>
                                                <div className="text-center">
                                                    <img style={{ width: "150px" }} className="mb-3" src="https://hautesignatures.com/images/utilities/empty_product.svg" alt="" />
                                                    <h6>We Got Some Error</h6>
                                                    <small>Pleace Try Again</small>
                                                </div>
                                            </div>
                                            :
                                            <div className='row'>
                                                {
                                                    itemsForShow?.map(it => (
                                                        <div className="col-sm-4 mb-3">
                                                            <ProductItem item={it[1]} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                    }
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;