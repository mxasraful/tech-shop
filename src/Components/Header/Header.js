import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../logo/logo-bg-light.jpg'
import "./Header.css"
import Search from './Search/Search';

const Header = () => {

    const navLinks = [
        {
            name: "Phone",
            url: "phone",
            drop: false
        },
        {
            name: "Laptop",
            url: "laptop",
            drop: false
        },
        {
            name: "Gadgets",
            url: "gadgets",
            drop: false
        },
        {
            name: "Smart Electronics",
            url: "smart-electronics",
            drop: true,
            dropItems: [
                {
                    name: "Lighting",
                    url: "smart-electronics/lighting",
                    drop: false
                },
                {
                    name: "Trimmer",
                    url: "smart-electronics/trimmer",
                    drop: false
                },
                {
                    name: "Hair Dryer",
                    url: "smart-electronics/hair-dryer",
                    drop: false
                },
                {
                    name: "Blender",
                    url: "smart-electronics/blender",
                    drop: false
                },
                {
                    name: "Smart Scale",
                    url: "smart-electronics/smart-scale",
                    drop: false
                },
            ]
        },
        {
            name: "Brands",
            url: "",
            drop: true,
            dropItems: [
                {
                    name: "Apple",
                    url: "brand/apple",
                    drop: false
                },
                {
                    name: "Samsung",
                    url: "brand/samsung",
                    drop: false
                },
                {
                    name: "Google",
                    url: "brand/google",
                    drop: false
                },
                {
                    name: "Dell",
                    url: "brand/dell",
                    drop: false
                },
                {
                    name: "Asus",
                    url: "brand/asus",
                    drop: false
                },
                {
                    name: "Lenovo",
                    url: "brand/lenovo",
                    drop: false
                },
                {
                    name: "HP",
                    url: "brand/hp",
                    drop: false
                },
                {
                    name: "OnePlus",
                    url: "brand/oneplus",
                    drop: false
                },
                {
                    name: "OPPO",
                    url: "brand/oppo",
                    drop: false
                },
                {
                    name: "Realme",
                    url: "brand/realme",
                    drop: false
                },
                {
                    name: "Xiaomi",
                    url: "brand/xiaomi",
                    drop: false
                },
                {
                    name: "Huawei",
                    url: "brand/huawei",
                    drop: false
                },
                {
                    name: "Vivo",
                    url: "brand/vivo",
                    drop: false
                },
            ]
        },
    ]

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Search />
                    <NavLink className="navbar-brand" to="/" style={{ width: "120px" }}>
                        <img src={logo} alt="" style={{ width: "150px" }} />
                    </NavLink>
                    <div className='' data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                    </div>
                    <button style={{ border: "none", background: "none" }} className="mobile-cart-btn" type="button">
                        <div className="header-search-modal-mobile-btn me-2">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search mb-1" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </div>
                        <Link to="/cart" className="btn btn-outline-danger px-4 me-3 d-fex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3 mb-1" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <span className='ms-1'>0</span>
                        </Link>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                            {
                                navLinks?.map(navItem => (
                                    <>
                                        {
                                            navItem.drop ?
                                                <>
                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            {navItem.name}
                                                        </a>
                                                        <ul class="dropdown-menu" style={{ width: navItem.dropItems.length > 5 && "400px" }}>
                                                            <div className={navItem.dropItems.length > 5 && 'd-flex flex-wrap ps-1 text-center'}>
                                                                {
                                                                    navItem.dropItems.map(dropItem => (
                                                                        <li style={{ width: navItem.dropItems.length > 5 && "130px" }} className={navItem.dropItems.length > 5 && 'mb-2'}><a class="dropdown-item" href={navItem.dropItems.length > 5 ? dropItem.url : "/category/" + dropItem.url}>{dropItem.name}</a></li>
                                                                    ))
                                                                }
                                                            </div>
                                                        </ul>
                                                    </li>
                                                </>
                                                :
                                                <li className="nav-item mx-3">
                                                    <NavLink className="nav-link" to={"/category/" + navItem.url}>{navItem.name}</NavLink>
                                                </li>

                                        }
                                    </>
                                ))
                            }
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="header-search-modal-desktop-btn me-2">
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search mb-1" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                            </div>
                            <Link to="/cart" className="btn btn-outline-danger px-4 me-3 d-fex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3 mb-1" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                                <span className='ms-1'>0</span>
                            </Link>
                            <a href="/login" className="btn btn-outline-success px-4">Login & Signup</a>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;