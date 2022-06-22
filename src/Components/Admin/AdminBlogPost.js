import React, { useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const AdminBlogPost = ({ adminData }) => {
  const [blog_title, setTitle] = React.useState("");
  const [blog_pic, setPic] = React.useState("");
  const [blog_desc, setDesc] = React.useState("");
  const [unSeenNoti, setUnseenNoti] = React.useState([]);

  const [cart, setCart] = React.useState([]);
  const [productQtyCart, setProductQtyCart] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/service/all-noti-unseen")
      .then((response) => {
        setUnseenNoti(response.data);
      })

      .catch(() => {
        console.log("error occur");
      });
    axios
      .get("http://localhost:5000/get-total-products-cart")
      .then((response) => {
        if (response) {
          console.log(response.data[0].productQuantity);
          setCart(response.data);
        } else {
          console.log("Something went wrong");
        }
      })

      .catch(() => {
        console.log("error occur");
      });
  }, [unSeenNoti]);

  useEffect(() => {
    calculation();
  });

  // calculating total products number in cart
  const calculation = () => {
    setProductQtyCart(
      cart.map((x) => x.productQuantity).reduce((x, y) => x + y, 0)
    );
  };

 


  var fd = new FormData();
  fd.append("blog_title", blog_title);
  fd.append("blog_pic", blog_pic);
  fd.append("blog_desc", blog_desc);
  fd.append("name", adminData.name)

  const addBlog = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/add-blog", fd)
      .then((res) => {
        // console.log(res.data);
        window.location = "/admin-blog-home";
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="container-fluid ps-0 py-3">
        <AdminHeader noti={unSeenNoti} productQtyCart={productQtyCart} />
        <div className="row py-4 me-4">
            <AdminSidebar adminData={adminData} />
          <div className="col-md-9">
            <div className="container-fluid bg-light py-4">
              <div className="container col-md-5 bg-white rounded shadow p-3">
                <p className="text text-secondary mt-3 mb-4 text-center fs-5">
                  Add Blog
                </p>
                <form onSubmit={addBlog}>
                  <div className="mb-3">
                    <label htmlFor="title" className="mb-1">
                      Blog title
                    </label>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      className="form-control"
                      id="title"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="desc" className="mb-1">
                      Blog Description
                    </label>
                    <textarea
                      onChange={(e) => setDesc(e.target.value)}
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="img" className="mb-1">
                      Blog Image
                    </label>
                    <input
                      onChange={(e) => setPic(e.target.files[0])}
                      type="file"
                      className="form-control"
                      id="img"
                    />
                  </div>
                  <div className="mb-3 d-flex justify-content-center align-items-center">
                    <button type="submit" className="btn btn-primary px-3">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBlogPost;
