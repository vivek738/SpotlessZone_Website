import React from 'react'

const UserProfile = () => {
    return (
        <>
            <div className="container col-md-5 col-sm-12 col-12 bg-white shadow rounded py-4 px-4">
                <h1 className="text text-secondary h6">My Profile</h1>
                <div className="pp-section text-center">
                    <img
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmen&psig=AOvVaw2pzLvxvwk1TrUNJULBLcn_&ust=1652605636883000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjDk_PR3vcCFQAAAAAdAAAAABAJ"
                        className="mb-2"
                        style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "50%",
                        }}
                        alt=""
                    />
                    <p className="text text-secondary mb-1 fw-bold h5">Vivek Sah</p>
                    <a href="#" className="text-decoration-none text-success">
                        Edit Profile 
                    </a>
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