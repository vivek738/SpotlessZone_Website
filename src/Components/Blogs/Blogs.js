import React from "react";
import Header from "../Homepage/Header";
import First from "../../Images/first.png";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
const Blogs = () => {
  const [blog, setBlog] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:5000/all-blog").then((res) => {
      setBlog(res.data);
      console.log(res.data);
      //   console.log(res.data[0].blog_desc.slice(0, 60));
    });
    // latestDate();
  }, []);

  //   var mostRecentDate = new Date(
  //     Math.max.apply(
  //       null,
  //       blog.map((e) => {
  //         return new Date(e.date);
  //       })
  //     )
  //   );
  //   var mostRecentObject = blog.filter((e) => {
  //     var d = new Date(e.date);
  //     return d.getTime() === mostRecentDate.getTime();
  //   });

  //   function latestDate() {
  //     setLatestBlog(mostRecentObject);
  //     console.log(latestBlog[0].blog_title)
  //   }
  //  console.log(mostRecentObject)
  //  console.log(mostRecentObject)

  return (
    <>
      <div
        className="container-fluid homeImg py-3"
        style={{
          paddingTop: 70,
          backgroundColor: "#ebebeb",
          background: `url(${First})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Header></Header>

        <div className="bread-crumb-section d-flex justify-content-center align-items-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none fs-5 text-success">
                  Home
                </a>
              </li>
              <li
                className="breadcrumb-item active fs-5 text-white"
                aria-current="page"
              >
                Blogs
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container my-5">
        <div className="row p-5">
          <div className="col-md-9">
            <div className="container col-md-10">
              <div className="row">
                {blog
                  ?.map((val, ind) => {
                    return (
                      <div key={ind} className="col-md-6 mb-4">
                        <div className="px-0 py-2 bg-white shadow rounded">
                          <div className="imgbox">
                            <img
                              className="bimg img-fluid"
                              src={`http://localhost:5000/${val.blog_pic}`}
                              alt=""
                            />
                          </div>
                          <div className="mx-4 my-3">
                            <p className="text text-secondary fs-3 fw-bold">
                              {val.blog_title}
                            </p>
                            <div className="d-flex justify-content-start align-items-center mb-3">
                              <div className="d-flex justify-content-start align-items-center me-3">
                                <i className="fa fa-user text-secondary me-2"></i>
                                <p className="text text-secondary mb-0">
                                  By <span className="fw-bold">{val.name}</span>
                                </p>
                              </div>
                              <div className="d-flex justify-content-start align-items-center">
                                <i className="fa fa-comment text-secondary me-2 text-info"></i>
                                <p className="text text-secondary mb-0">
                                  Comments
                                </p>
                              </div>
                            </div>
                            <p className="text text-secondary">
                              {val.blog_desc.slice(0, 40)}...
                            </p>
                            <Link
                              to={`/blogdetail/${val._id}`}
                              className="text-decoration-none"
                            >
                              <div className="d-flex justify-content-start align-items-center">
                                <p className="text text-secondary text-uppercase mb-0 me-3">
                                  read more
                                </p>
                                <i
                                  className="fa fa-arrow-right fw-bold text-secondary"
                                  id="read-more"
                                ></i>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                  .sort()
                  .reverse()}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="px-3 border py-4">
              <p className="text text-dark fs-5 fw-bold mb-0">Recent Blogs</p>
              {
                blog
                  ?.map((bd, idx) => {
                    return (
                      <>
                        <div
                          className="d-flex justify-content-start align-items-center"
                          key={idx}
                        >
                          <div className="ms-2 mt-2">
                            <div className="d-flex justify-content-start align-items-center">
                              <i className="fa fa-clock me-2 text-secondary"></i>
                              <small className="text text-secondary mb-0 d-block">
                                {bd.date}
                              </small>
                            </div>
                            <p className="text text-secondary fw-bold">
                              {bd.blog_title}
                            </p>
                          </div>
                        </div>
                        <hr />
                      </>
                    );
                  })
                  .sort()
                  .reverse()
                //   .reduce((bd, y)=>bd.date > y.date ? bd : y)
              }
              {/* <hr className="col-md-2 mt-0" /> */}

              {/* <div className="d-flex justify-content-start align-items-center">
                 <img src={First} alt="" style={{ width: "80px", height: "80px", objectFit: "cover" }} /> 
                <div className="ms-2 mt-2">
                  <div className="d-flex justify-content-start align-items-center">
                    <i className="fa fa-clock me-2 text-secondary"></i>
                    <small className="text text-secondary mb-0 d-block">
                      June 5, 2022
                    </small>
                  </div>
                  <p className="text text-secondary fw-bold">
                    The Secret of cleaning your house
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
