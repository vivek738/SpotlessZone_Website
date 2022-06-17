import React from 'react'
import axios from 'axios'


const AdminBlogHome = () => {
    const [blog_title, setTitle] = React.useState('')
    const [blog_pic, setPic] = React.useState('')
    const [blog_desc, setDesc] = React.useState('')
    var fd = new FormData()
    fd.append('blog_title', blog_title)
    fd.append('blog_pic', blog_pic)
    fd.append('blog_desc', blog_desc)

    const addBlog = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/add-blog', fd).then(res => {
            console.log(res)
            window.location = '/admin-blog-home'
        }).catch(e => {
            console.log(e)
        })
    }

    // update
    const update = (pid) => {
        // console.log(pid)
        axios.put("http://localhost:5000/blogupdate/" + pid,fd)
            .then(res=>
                console.log(res.data),
                window.location = '/admin-blog-home'
            
            )
            .catch()
    }
    // delete
    const deleteBlog = (pid) => {
        // console.log(pid)
        axios.delete("http://localhost:5000/blogdelete/" + pid)
            .then(
                window.location = '/admin-blog-home'
            )
            .catch()
    }


    const [blog, setBlog] = React.useState([])
    React.useEffect(() => {
        axios.get('http://localhost:5000/all-blog').then(res => {
            setBlog(res.data)
            console.log(res.data[0].blog_desc.slice(0, 60))
        })
    }, [])

    return (
        <>
            <div className="container-fluid p-0">
                <div className="container col-md-11">
                    <div className="d-flex justify-content-end align-items-center mx-5">
                        <button
                            className="btn text-white mt-3"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            style={{ background: "#6610f2" }}
                        // style={{background: "#6f42c1"}}
                        >
                            Add new blog
                        </button>
                        {/*  */}
                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title text-center"
                                            id="exampleModalLabel"
                                        >
                                            Add Blog
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={addBlog}>
                                            <div className="mb-3">
                                                <label htmlFor="title" className='mb-1'>Blog title</label>
                                                <input onChange={e => setTitle(e.target.value)} type="text" className="form-control" id='title' />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="desc" className='mb-1'>Blog Description</label>
                                                <textarea onChange={e => setDesc(e.target.value)} name="" id="" cols="30" rows="4" className="form-control"></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="img" className='mb-1'>Blog Image</label>
                                                <input onChange={e => setPic(e.target.files[0])} type="file" className="form-control" id='img' />
                                            </div>
                                            <div className="mb-3 d-flex justify-content-center align-items-center">
                                                <button type="submit" className="btn btn-warning h5 px-5">
                                                    Post Blog
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                    <hr />
                    <div className="card py-2 px-2" style={{ border: "none" }}>
                        <table className="table-striped">
                            <thead>
                                <tr>
                                    {/* <th>#</th> */}
                                    <th>Blog Title</th>
                                    <th>Blog Image</th>
                                    <th>Publish Date</th>
                                    <th>Blog Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    blog?.map((val, ind) => {
                                        return (
                                            <tr key={ind}>
                                                {/* <td>1</td> */}
                                                <td>{val.blog_title}</td>
                                                <td>
                                                    <img
                                                        src={`http://localhost:5000/${val.blog_pic}`}
                                                        className="my-2"
                                                        style={{
                                                            width: "60px",
                                                            height: "60px",
                                                            borderRadius: "50%",
                                                            objectFit: "cover",
                                                        }}
                                                        alt=""
                                                    />
                                                </td>
                                                <td>{val.date}</td>
                                                <td style={{ textOverflow: "ellipsis" }}>{val.blog_desc.slice(0, 30)} </td>
                                                <td>
                                                    {/* update */}
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#blogUpdate"
                                                    >
                                                        Edit
                                                    </button>{" "}
                                                    &nbsp; &nbsp;
                                                    {/*  */}
                                                    <div
                                                        className="modal fade"
                                                        id="blogUpdate"
                                                        tabindex="-1"
                                                        aria-labelledby="updateblogLabel"
                                                        aria-hidden="true"
                                                    >
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5
                                                                        className="modal-title text-center"
                                                                        id="updateblogLabel"
                                                                    >
                                                                        Update Blog
                                                                    </h5>
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-close"
                                                                        data-bs-dismiss="modal"
                                                                        aria-label="Close"
                                                                    ></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form>
                                                                        <div className="mb-3">
                                                                            <label
                                                                                htmlFor="blogTitle"
                                                                                className="mb-2 h6 text-secondary"
                                                                            >
                                                                                Blog Title
                                                                            </label>
                                                                            <input
                                                                            onChange={e=>setTitle(e.target.value)}
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Enter your blog title..."
                                                                                id="blogTitle"
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label
                                                                                htmlFor="blogImage"
                                                                                className="mb-2 h6 text-secondary"
                                                                            >
                                                                                Blog Image
                                                                            </label>
                                                                            <input
                                                                            onChange={e=>setPic(e.target.files[0])}
                                                                                type="file"
                                                                                className="form-control"
                                                                                placeholder="blog Image"
                                                                                id="blogImage"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <label
                                                                                htmlFor="richText"
                                                                                className="mb-2 h6 text-secondary"
                                                                            >
                                                                                Blog Description
                                                                            </label>
                                                                            <textarea
                                                                            onChange={e=>setDesc(e.target.value)}
                                                                                name=""
                                                                                id=""
                                                                                cols="30"
                                                                                rows="4"
                                                                                className="form-control"
                                                                            ></textarea>
                                                                        </div>
                                                                        <hr />
                                                                <div className="mx-auto mb-3">
                                                                    <button
                                                                    onClick={update.bind(this,val._id)}
                                                                    type="button"
                                                                    className="btn btn-warning h5 px-5"
                                                                    >
                                                                        Update Blog
                                                                    </button>
                                                                </div>
                                                                    </form>
                                                                </div>
                                                               
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*  */}
                                                    <button className="btn btn-danger" onClick={() => { deleteBlog(val._id) }}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminBlogHome