import React from 'react'
import First from '../../Images/first.png';
import { Link } from 'react-router-dom';
import './style.css'
import Header from '../Homepage/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const BlogDetail = () => {
    const {id} = useParams();
    console.log(id)
    const [blog, setBlog] = React.useState([])
    React.useEffect(() => {
        axios.get(`http://localhost:5000/single/blog/${id}`).then(res => {
            setBlog(res.data)
            console.log(res)
        })
    },[])
    return (
        <>
            <div className="container-fluid homeImg py-3" style={{ paddingTop: 70, backgroundColor: "#ebebeb", background: `url(${First})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "50vh", backgroundSize: "cover", position: "relative" }}>
                {/* <Header></Header> */}

                <p className="text text-white fs-1 fw-bold text-center">
                     {blog.blog_title}
                </p>
                <div className="bread-crumb-section d-flex justify-content-center align-items-center">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/" className='text-decoration-none fs-5 text-success'>Home</a>
                            </li>
                            <li className="breadcrumb-item active fs-5 text-white" aria-current="page">
                                <a href="/" className='text-decoration-none fs-5 text-success'>Blogs</a>
                            </li>
                            <li className="breadcrumb-item active fs-5 text-white" aria-current="page">
                                <a href="/" className='text-decoration-none fs-5 text-success'>Blogs Details</a>
                            </li>
                            <li className="breadcrumb-item active fs-5 text-white" aria-current="page">
                                {blog.blog_title}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-9">
                        <div className="container col-md-9">
                            <div className="row">
                                <div className="col-md-12 mb-4">
                                    <div className="px-0 py-2">
                                        <img className='' src={`http://localhost:5000/${blog.blog_pic}`} alt="" style={{ width: "100%" }} />
                                        <div className="my-3">
                                            <div className="d-flex justify-content-start align-items-center mb-3">
                                                <div className="d-flex justify-content-start align-items-center me-3">
                                                    <i className="fa fa-calendar text-secondary me-2"></i>
                                                    <p className="text text-secondary mb-0">June 5, 2022</p>
                                                </div>
                                                <div className="d-flex justify-content-start align-items-center me-3">
                                                    <i className="fa fa-user text-secondary me-2"></i>
                                                    <p className="text text-secondary mb-0">by admin</p>
                                                </div>
                                                {/* <div className="d-flex justify-content-start align-items-center me-3">
                                                    <i className="fa fa-tag text-secondary me-2"></i>
                                                    <p className="text text-secondary mb-0">Kitchen cleaning</p>
                                                </div> */}
                                                <div className="d-flex justify-content-start align-items-center me-3">
                                                    <i className="fa fa-comment text-secondary me-2"></i>
                                                    <p className="text text-secondary mb-0"> Comments</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <p className="text text-secondary fs-5">
                                                {blog.blog_desc}
                                            </p>
                                            
                                        </div>
                                        <div className="border px-4 py-3">
                                            <p className="text text-dark fs-5 fw-bold mb-0">Leave a Comment</p>
                                            <hr className='col-md-2 mt-0' />
                                            <textarea name="" id="" cols="30" rows="2" className="form-control" placeholder='Type your comment...' style={{ borderRadius: "0px", border: "0px solid" }}></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="px-3 border py-4">
                            <p className="text text-dark fs-5 fw-bold mb-0">Recent Blogs</p>
                            <hr className='col-md-2 mt-0' />
                            <div className="d-flex justify-content-start align-items-center">
                                {/* <img src={First} alt="" style={{ width: "80px", height: "80px", objectFit: "cover" }} /> */}
                                <div className='ms-2 mt-2'>
                                    <div className="d-flex justify-content-start align-items-center">
                                        <i className="fa fa-clock me-2 text-secondary"></i>
                                        <small className="text text-secondary mb-0 d-block">June 5, 2022</small>
                                    </div>
                                    <p className="text text-secondary fw-bold">{blog.blog_title}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-start align-items-center">
                                {/* <img src={First} alt="" style={{ width: "80px", height: "80px", objectFit: "cover" }} /> */}
                                <div className='ms-2 mt-2'>
                                    <div className="d-flex justify-content-start align-items-center">
                                        <i className="fa fa-clock me-2 text-secondary"></i>
                                        <small className="text text-secondary mb-0 d-block">June 5, 2022</small>
                                    </div>
                                    <p className="text text-secondary fw-bold">{blog.blog_title}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-start align-items-center">
                                {/* <img src={First} alt="" style={{ width: "80px", height: "80px", objectFit: "cover" }} /> */}
                                <div className='ms-2 mt-2'>
                                    <div className="d-flex justify-content-start align-items-center">
                                        <i className="fa fa-clock me-2 text-secondary"></i>
                                        <small className="text text-secondary mb-0 d-block">July 5, 2022</small>
                                    </div>
                                    <p className="text text-secondary fw-bold">T{blog.blog_title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetail