import React from 'react'

const EditProfile = () => {
  return (
    <>
    <div className="container col-md-8 my-5 px-5 bg-light">
      <div className="row">
        <div className="col-md-4">
          <div className="p-1">
            <div className="text-center">
              <img
                src="https://cdn.pixabay.com/photo/2013/07/18/10/58/girl-163686__340.jpg"
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
              <p className="text text-secondary h5 mt-3 mb-0">Vivek Sah Chor</p>
              <p className="text text-secondary fs-6 mt-0">viveksah9800@gmail.com</p>
            </div>
            <div className="border rounded mx-auto mt-4">
              <div className="d-flex justify-content-start align-items-center">
                <i className="fas fa-home me-3 fs-5 ps-4 py-3 text-primary"></i>
                <p className="text text-primary mb-0 fs-5 ps-4 py-3">
                  Dashboard
                </p>
              </div>
              <hr className="my-0 py-0" />
              <div className="d-flex justify-content-start align-items-center bg-primary">
                <i className="fas fa-address-book me-3 fs-5 ps-4 py-3 text-white"></i>
                <p className="text text-white mb-0 fs-5 ps-4 py-3">
                  Account details
                </p>
              </div>
              <hr className="my-0 py-0" />
              <div className="d-flex justify-content-start align-items-center">
                <i className="fas fa-key me-3 fs-5 ps-4 py-3 text-primary"></i>
                <p className="text text-primary mb-0 fs-5 ps-4 py-3">
                  Change Password
                </p>
              </div>
              <hr className="my-0 py-0" />
              <div className="d-flex justify-content-start align-items-center">
                <i className="fa fa-sign-out me-3 fs-5 ps-4 py-3 text-primary"></i>
                <p className="text text-primary mb-0 fs-5 ps-4 py-3">
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="px-2 py-3">
            <p className="text text-dark h3 my-3">Account Settings</p>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="" className="text-secondary mb-2 h6">
                  Email Address
                </label>
                <input type="email" className="form-control" placeholder="youremail@gmail.com"/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="" className="text-secondary mb-2 h6">
                  First Name
                </label>
                <input type="text" className="form-control" placeholder="Vivek"/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="" className="text-secondary mb-2 h6">
                  Last Name
                </label>
                <input type="text" className="form-control" placeholder="Sah"/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="" className="text-secondary mb-2 h6">
                  Website
                </label>
                <input type="text" className="form-control" placeholder="https://viveksah.com"/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="" className="text-secondary mb-2 h6">
                  Facebook
                </label>
                <input type="text" className="form-control" placeholder="https://www.facebook.com/viveksah132"/>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="" className="text-secondary mb-2 h6">
                  Instagram
                </label>
                <input type="text" className="form-control" placeholder="https://www.instagram.com/vivek-sah332"/>
              </div>
              <button className="btn btn-primary px-5">Edit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}


export default EditProfile