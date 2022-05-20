import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = () => {
    return (
        <>
            <div className="container col-md-5 col-sm-12 col-12 bg-white shadow rounded py-4 px-4">
                <h1 className="text text-secondary h6">My Profile</h1>
                <div className="pp-section text-center">
                    <div className="position-relative">
                        <img
                            src="https://cdn.pixabay.com/photo/2021/11/04/12/34/beauty-6768212__340.jpg"
                            alt=""
                            style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "cover",
                                borderRadius: "50%",
                            }}
                        />
                        <div
                            className="position-absolute"
                            style={{ bottom: "0px", left: "50%" }}
                        >
                            <button className="btn btn-link text-decoration-none">
                                <i className="fa fa-edit fs-3 text-white"></i>
                            </button>
                        </div>
                    </div>
                    <p className="text text-secondary mb-1 fw-bold h5">Spotlesszone</p>
                    <Link to="/edit-profile" className="text-decoration-none text-success">
                        Edit Profile
                    </Link>
                </div>
                <hr />
                <div className="history">
                    <div className="d-flex justify-content-start align-items-center">
                        <i class="bi bi-bag-fill me-2"></i>
                        <p className="text text-dark mb-1">Order History</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                        <i class="bi bi-heart-fill me-2"></i>
                        <p className="text text-dark mb-1">Favourites</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                        <i class="bi bi-star-fill me-2"></i>
                        <p className="text text-dark mb-1">Review</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                        <i class="bi bi-geo-alt-fill me-2"></i>
                        <p className="text text-Review mb-1">Saved Addresses</p>
                    </div>
                </div>
                <hr />
                <div className="flex justify-content-center align-items-center text-center">
                    <button className="btn btn-link text-decoration-none text-success">
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserProfile