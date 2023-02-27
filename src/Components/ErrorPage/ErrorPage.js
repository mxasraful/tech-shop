import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="error-page-main">
            <div className="container">
                <div className="card mt-3">
                    <div className="card-body">
                        <div className='d-flex justify-content-center align-items-center' style={{ marginTop: "10%", marginBottom: "10%" }}>
                            <div className="text-center">
                                <img style={{ width: "200px" }} className="mb-3" src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" alt="" />
                                <h6>Page Not Found!</h6>
                                <small>We did not find any content in this page. Please try again!</small><br />
                                <Link to="/" className='btn btn-success btn-sm mt-4 px-5'>Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;