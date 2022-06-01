import React from 'react'
import Header from '../Homepage/Header';

const UserDashboard = () => {
    return (
        <>
            <div className='bg-light container-fluid p-0'>
                <div className='container col-md-8 py-4'>
                    <p className="text text-center text-secondary fs-3 fw-bold">Customer Dashboard</p>
                    <div className="d-flex justify-content-between align-items-center border p-3 rounded bg-white mb-3">
                        <div className="desc">
                            <p className="text text-primary fs-5">Hey Suraj</p>
                            <small className="d-block text-secondary mb-3">Enjoy yur free membership for lifetime access in our website.</small>
                            <div className="d-flex justify-content-start align-items-center">
                                <i className="fa fa-check-circle me-2"></i>
                                <p className="text text-secondary mb-0">Earn Points</p>
                            </div>
                            <div className="d-flex justify-content-start align-items-center">
                                <i className="fa fa-check-circle me-2"></i>
                                <p className="text text-secondary mb-0">Reedem points to get discount</p>
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <img src="https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587__340.jpg" alt="" style={{ width: "100px", height: "100px", borderRadius: "50%", backgroundSize: 'cover' }} />
                            </div>
                            <div>
                                <a href="#" className='text-decoration-none'>
                                    View Profile
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded border p-3'>
                        <p className="text text-start text-secondary fs-5 fw-bold mb-0">Your Activity</p>
                        <hr className='mt-0 mb-3' />
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <div className="p-2 bg-light rounded border">
                                    <div className="d-flex justify-content-between align-items-center mx-3">
                                        <div className=''>
                                            <p className="text text-secondary mb-0">You have assigned create model task.</p>
                                            <span class="badge bg-danger">On Track</span>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary px-4">View Task</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="p-2 bg-light rounded border">
                                    <div className="d-flex justify-content-between align-items-center mx-3">
                                        <div className=''>
                                            <p className="text text-secondary mb-0">You have assigned create model task.</p>
                                            <span class="badge bg-success">Completed</span>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary px-4 disabled">Done</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="p-2 bg-light rounded border">
                                    <div className="d-flex justify-content-between align-items-center mx-3">
                                        <div className=''>
                                            <p className="text text-secondary mb-0">You have assigned create model task.</p>
                                            <span class="badge bg-success">Completed</span>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary px-4 disabled">Done</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="p-2 bg-light rounded border">
                                    <div className="d-flex justify-content-between align-items-center mx-3">
                                        <div className=''>
                                            <p className="text text-secondary mb-0">You have assigned create model task.</p>
                                            <span class="badge bg-success">Completed</span>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary px-4 disabled">Done</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard
