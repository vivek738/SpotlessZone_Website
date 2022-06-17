import React from 'react';
import First from '../../Images/first.png';
import Header from '../Homepage/Header';

const Checkout = () => {
    return (
        <>

            <div className="container-fluid homeImg py-3" style={{ paddingTop: 70, backgroundColor: "#ebebeb", background: `url(${First})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "50vh", backgroundSize: "cover", position: "relative" }}>
                <Header></Header>

                <div className="bread-crumb-section d-flex justify-content-center align-items-center">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/" className='text-decoration-none fs-5 text-success'>Home</a>
                            </li>
                            <li className="breadcrumb-item active fs-5 text-white" aria-current="page">
                                About Us
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-fluid bg-light py-4">
                <div className="container col-md-11">
                    <div className="container col-md-9">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="p-1">
                                    <form>
                                        <div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="p-1">
                                                        <label htmlFor="">First Name</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="p-1">
                                                        <label htmlFor="">First Name</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-3 my-3">
                                <div className="p-1 border">
                                    Hello there.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout