import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { useHistory, useParams } from 'react-router-dom';

const ProductItemPage = () => {

    const [itemData, setItemData] = useState(null)
    const [itemDataError, setItemDataError] = useState(false)
    const [itemDataErrorMsg, setItemDataErrorMsg] = useState(false)
    const [getItemLoding, setGetItemLoding] = useState(true)
    const [qty, setQty] = useState(1)
    const [selectedVariant, setSelectedVariant] = useState(0)

    const params = useParams()
    const itemId = params?.id

    console.log(itemData)

    useEffect(() => {
        if (itemId) {
            setGetItemLoding(true)
            const dbRef = ref(getDatabase());
            get(child(dbRef, `items/${itemId}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    setItemData(snapshot.val());
                    setItemDataError(false);
                    setGetItemLoding(false)
                } else {
                    setItemDataError(true);
                    setItemData(null);
                    setGetItemLoding(false)
                }
            }).catch((error) => {
                setItemDataError(true);
                setItemData(null);
                setGetItemLoding(false)
                setItemDataErrorMsg(error)
            });
        } else {
            setItemDataError(true);
            setItemData(null);
            setGetItemLoding(false)
            setItemDataErrorMsg("Internet Error")
        }
    }, [itemId])


    return (
        <div className="product-item-page mb-5">
            <div className="container pb-4">
                {
                    getItemLoding ?
                        <div className='d-flex justify-content-center' style={{ marginTop: "25%" }}>
                            <div class="spinner-border text-secondary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        <div className='product-item-full-view'>
                            <div className="card mt-3">
                                <div className="row card-body">
                                    {
                                        itemDataError ?
                                            <div className='d-flex justify-content-center align-items-center' style={{ marginTop: "10%", marginBottom: "10%" }}>
                                                <div className="text-center">
                                                    <img style={{ width: "150px" }} className="mb-3" src="https://hautesignatures.com/images/utilities/empty_product.svg" alt="" />
                                                    <h6>Product Not Found!</h6>
                                                    <small>We did not find any product. Please try again!</small>
                                                </div>
                                            </div>
                                            :
                                            <>
                                                {
                                                    itemData ?
                                                        <>
                                                            <div className="col-sm-5" style={{ height: "500px", textAlign: "center" }}>
                                                                <img src={itemData.imgs[0]} alt="" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <h4>{itemData.title}</h4>
                                                                <div className="d-flex">
                                                                    <div className="">Category: {itemData.category}</div>
                                                                    <div className="px-4">|</div>
                                                                    <div className="">Brand: {itemData.brand}</div>
                                                                </div>
                                                                <div className="mt-4">
                                                                    <h6>Rating</h6>
                                                                    <div className="d-flex text-warning">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
                                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                                        </svg>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star me-1" viewBox="0 0 16 16">
                                                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-4">
                                                                    <h6>Variants: </h6>
                                                                    {
                                                                        itemData.variant?.length > 1 ?
                                                                            <div className=''>
                                                                                {
                                                                                    itemData.variant.map(it => (
                                                                                        <div onClick={() => setSelectedVariant(itemData.variant.indexOf(it))} className={itemData.variant.indexOf(it) === selectedVariant ? "d-inline px-3 py-1 rounded me-2" : "d-inline px-3 py-1 rounded border me-2"} style={{ cursor: "pointer", border: itemData.variant.indexOf(it) === selectedVariant && "1px solid #ff6262", background: itemData.variant.indexOf(it) === selectedVariant && "#ff818121" }}>{it}</div>
                                                                                    ))
                                                                                }
                                                                            </div>
                                                                            :
                                                                            <div className="px-3 d-inline py-1 rounded" style={{ border: "1px solid #ff6262", background: "#ff818121" }}>{itemData.variant}</div>
                                                                    }
                                                                </div>
                                                                <div className="mt-4">
                                                                    <h6>Quantity:</h6>
                                                                    <div className="mt-3">
                                                                        <div class="btn-group me-2" role="group" aria-label="First group">
                                                                            <button type="button" class="btn btn-sm border" onClick={() => qty === 1 ? setQty(1) : setQty(qty - 1)}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-dash-lg mb-1" viewBox="0 0 16 16">
                                                                                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                                                                </svg>
                                                                            </button>
                                                                            <div class="border-top border-bottom px-4 py-1">{qty}</div>
                                                                            <button type="button" class="btn btn-sm border" onClick={() => qty === 9 ? setQty(9) : setQty(qty + 1)}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-plus-lg mb-1" viewBox="0 0 16 16">
                                                                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-4 mb-4">
                                                                    <h3 >Price: <span className="text-danger">{itemData.price[selectedVariant]}.00 $ </span> </h3>
                                                                </div>
                                                                <div className="mt-4">
                                                                    <button className='btn btn-danger px-5'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus mb-1 me-2" viewBox="0 0 16 16">
                                                                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                                                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                                        </svg>
                                                                        <span>Add To Cart</span>
                                                                    </button>
                                                                </div>
                                                                <div className="mt-4">
                                                                    <h6>Specifications:</h6>
                                                                    <div class="item-view-specifications-table mt-3 d-flex">
                                                                        {
                                                                            itemData.featuresTitle.length > 1 ?
                                                                                <>
                                                                                    <div className="col-3 border">
                                                                                        {
                                                                                            itemData.featuresTitle?.map(it =>
                                                                                            (
                                                                                                <div className="border-bottom ps-2 pe-1 py-2">{it}</div>
                                                                                            )
                                                                                            )
                                                                                        }
                                                                                    </div>
                                                                                    <div className="col-9 border-top border-end border-bottom">
                                                                                        {
                                                                                            itemData.featuresValue?.map(it =>
                                                                                            (
                                                                                                <div className="border-bottom ps-2 pe-1 py-2 d-block">{it}</div>
                                                                                            )
                                                                                            )
                                                                                        }
                                                                                    </div>
                                                                                </>
                                                                                :
                                                                                <span className="py-1">
                                                                                    Specification Not Found
                                                                                </span>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                        :
                                                        <div className='d-flex justify-content-center align-items-center' style={{ marginTop: "10%", marginBottom: "10%" }}>
                                                            <div className="text-center">
                                                                <img style={{ width: "150px" }} className="mb-3" src="https://hautesignatures.com/images/utilities/empty_product.svg" alt="" />
                                                                <h6>Product Not Found!</h6>
                                                                <small>We did not find any product. Please try again!</small>
                                                            </div>
                                                        </div>
                                                }
                                            </>
                                    }
                                </div>
                            </div>
                            {
                                getItemLoding ?
                                    <></>
                                    :
                                    <>
                                        {
                                            itemDataError ?
                                                <></>
                                                :
                                                <>
                                                    {
                                                        itemData &&
                                                        <>
                                                            {
                                                                itemData?.about?.length > 1 &&
                                                                <div className="card product-item-full-view-description mt-4">
                                                                    <div className="card-body">
                                                                        <h5>Description</h5>
                                                                        {
                                                                            itemData?.about.map(it => (
                                                                                <><span>{it}</span><br /></>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            }
                                                        </>
                                                    }
                                                </>
                                        }
                                    </>
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default ProductItemPage;