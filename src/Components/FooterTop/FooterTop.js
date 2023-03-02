import React from 'react';
import Logo from './../../logo/logo-bg-light.jpg'

const FooterTop = () => {
    return (
        <div className="bg-body-tertiary mb-5 mt-4 pb-5 pt-4">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <img src={Logo} alt="" className="w-50" />
                    </div>
                    <div className="footer-top-links col-sm-4">
                        <h5>LINKS</h5>
                        <ul class="list-unstyled mt-4">
                            <small class="mb-2"><a className="text-dark" style={{ textDecoration: "none" }} href="https://asrafulweb.com/contact">Contact Us</a></small><br />
                            <small class="mb-2"><a className="text-dark" style={{ textDecoration: "none" }} href="https://asrafulweb.com/contact">Customer Support</a></small><br />
                            <small class="mb-2"><a className="text-dark" style={{ textDecoration: "none" }} href="https://asrafulweb.com/contact">Shipping</a></small>
                        </ul>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className=" col-sm-4">
                        <h5>NEWSLATER</h5>
                        <form class="row g-3 mt-4">
                            <div class="col-auto">
                                <label for="inputEmailFooterTop" class="visually-hidden">Email</label>
                                <input type="email" class="form-control" id="inputEmailFooterTop" placeholder="Your email" />
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-primary mb-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;