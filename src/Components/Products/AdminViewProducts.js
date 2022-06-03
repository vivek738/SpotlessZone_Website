import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Homepage/Header";
import bgImg from "../../Images/first.png";
import { toast } from 'react-toastify'
import { WarnToast } from "../../utils/WarnToast";


// use reducer

const AdminProducts = () => {
  const [pdata, setProductData] = useState([]);
  const { pid } = useParams()
  const [pname, setPname] = useState('')
  const [pdesc, setPdesc] = useState('')
  const [pprice, setPprice] = useState('')
  const [pqty, setPqty] = useState('')
  const [pic, setPic] = useState('')

  



  useEffect(() => {
    axios
      .get("http://localhost:5000/get/product")
      .then((result) => {
        // console.log(result.data);
        setProductData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const headers = [
    { key: "pic", label: "Product Image" },
    { key: "pname", label: "Product Name" },
    { key: "pqty", label: "Quantity" },
    { key: "pdesc", label: "Description" },
    { key: "action", label: "Action" },
  ];

  const handleUpdate = (e) => {
    e.preventDefault();
    const productUpdateForm = new FormData()
    productUpdateForm.append('pid', pid)
    productUpdateForm.append('pname', pname)
    productUpdateForm.append('pdesc', pdesc)
    productUpdateForm.append('pprice', pprice)
    productUpdateForm.append('pqty', pqty)
    productUpdateForm.append('image', pic)
    axios
      .put(`http://localhost:5000/update-product/${pid}`, productUpdateForm) 
        
      .then((result) => {
        console.log(result.data)
        if (result) {
          window.location="/view-admin-products"
       }
      })
      .catch((e) => {
        toast.warn(<WarnToast />, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: true,
        })
      })
  };
  return (
    <>
      <div
        className="container-fluid homeImg py-3"
        style={{
          paddingTop: 70,
          backgroundColor: "#ebebeb",
          background: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Header />

        <div className="bread-crumb-section">
          <h1 className="text-center text-white my-4 fw-bold">Cart</h1>
          <div className="row text-center">
            <Link className="text-success fw-bold text-decoration-none" to="/">
              Home &gt;&gt; <span className="text-white">Cart</span>
            </Link>
          </div>
        </div>
      </div>
      {/* implementing conditions for products in cart */}
      {pdata.length === 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-12">
              <Link to="/addProduct" className="btn btn-info">
                Add Product
              </Link>
              <h3 className="m-5">There is no any products to display!!!</h3>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-12">
                    <div className="card my-5">
                      <div className="card-body">
                        <table class="table table-responsive">
                          <thead>
                            <tr>
                              {headers.map((row) => {
                                return <th key={row.key}>{row.label}</th>;
                              })}
                            </tr>
                          </thead>
                          <tbody style={{ justifyContent: "center" }}>
                            {/* for produdct added data  data : use loop*/}
                            {pdata && pdata.length > 0
                              ? pdata.map((items) => {
                                  return (
                                    <tr>
                                      <td>
                                        <img
                                          src={
                                            "http://localhost:5000/" + items.pic
                                          }
                                          alt=""
                                          className="img-fluid"
                                          style={{
                                            maxWidth: "100px",
                                            maxHeight: "100px",
                                            borderRadius: "5px",
                                          }}
                                        />
                                      </td>

                                      <td>
                                        <span
                                          style={{
                                            fontWeight: "600",
                                            marginLeft: "50px",
                                          }}
                                        >
                                          {items.pname}
                                        </span>
                                      </td>

                                      <td>
                                        <span
                                          style={{
                                            fontWeight: "600",
                                            marginLeft: "50px",
                                          }}
                                        >
                                          {items.pqty}
                                        </span>
                                      </td>

                                      <td>{items.pdesc}</td>

                                      <td>
                                        <i
                                          className="bi bi-trash-fill"
                                          //   onClick={deleteproductCart.bind(
                                          //     this,
                                          //     items._id
                                          //   )}
                                          style={{
                                            cursor: "pointer",
                                            color: "red",
                                            fontSize: "1.2rem",
                                          }}
                                        ></i>

                                        <Link to={"/update-product/"+items._id}>
                                          {" "}
                                          <i
                                            className="bi bi-pencil-fill text-info ps-3"
                                            style={{
                                              cursor: "pointer",
                                              fontSize: "1.2rem",
                                            }}
                                          ></i>
                                        </Link>
                                      </td>
                                    </tr>
                                  );
                                })
                              : "Loading..."}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default AdminProducts;
