import axios from 'axios'
import React from 'react'

const AdminBlogPost = () => {
    const [blog_title , setTitle ] = React.useState('')
    const [blog_pic , setPic ] = React.useState('')
    const [blog_desc , setDesc ] = React.useState('')
    var fd = new FormData()
    fd.append('blog_title',blog_title)
    fd.append('blog_pic',blog_pic)
    fd.append('blog_desc',blog_desc)

    const addBlog =  (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5000/add-blog',fd).then(res=>{
            console.log(res)
            window.location ='/blogs'
        }).catch(e=>{
            console.log(e)
        })
    }
    return (
        <>
            <div className="container-fluid bg-light py-4">
                <div className="container col-md-5 bg-white rounded shadow p-3">
                    <p className="text text-secondary mt-3 mb-4 text-center fs-5">Add Blog post</p>
                    <form onSubmit={addBlog}>
                        <div className="mb-3">
                            <label htmlFor="title" className='mb-1'>Blog title</label>
                            <input onChange={e=>setTitle(e.target.value)} type="text" className="form-control" id='title' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className='mb-1'>Blog Description</label>
                            <textarea onChange={e=>setDesc(e.target.value)} name="" id="" cols="30" rows="4" className="form-control"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="img" className='mb-1'>Blog Image</label>
                            <input onChange={e=>setPic(e.target.files[0])} type="file" className="form-control" id='img' />
                        </div>
                        <div className="mb-3 d-flex justify-content-center align-items-center">
                            <button type='submit' className="btn btn-primary px-3">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminBlogPost