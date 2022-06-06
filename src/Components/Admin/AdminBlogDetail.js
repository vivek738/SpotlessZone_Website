import React from 'react'

const AdminBlogDetail = () => {
  return (
    <>
    <div className="container-fluid bg-light py-4">
        <div className="container col-md-5 bg-white rounded shadow p-3">
            <p className="text text-secondary mt-3 mb-4 text-center fs-5">Add Blog Details</p>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className='mb-1'>Blog title</label>
                    <input type="text" className="form-control" id='title' />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className='mb-1'>Blog Description</label>
                    <input type="text" className="form-control" id='desc' />
                </div>
                <div className="mb-3">
                    <label htmlFor="img" className='mb-1'>Blog Image</label>
                    <input type="file" className="form-control" id='img' />
                </div>
                <div className="mb-3 d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary px-3">Submit</button>
                </div>
            </form>
        </div>
    </div>
</>
  )
}

export default AdminBlogDetail