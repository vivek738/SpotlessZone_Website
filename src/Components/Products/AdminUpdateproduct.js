import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const AdminUpdate = () => {
  const [productdata, setProductdata] = useState([]);
  // for loading data in the initial stage : for that use (useEffect)
  useEffect(() => {
    axios
      .get("http://localhost:5000/get/product")
      .then((result) => {
        //   console.log(result.data.length)
        setProductdata(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   const deleteProduct = (productid) => {
  //     axios
  //       .delete("http://localhost:90/product/deleteproduct/" + productid, config)
  //       .then((result) => {
  //         setDeletemsg(
  //           "You have successfully deleted !!!, Please refresh page to see changes..."
  //         );
  //       })
  //       .catch((e) => {
  //         toast.warn(<WarningToast />, {
  //           position: toast.POSITION.BOTTOM_CENTER,
  //           autoClose: true,
  //         });
  //       });
  //   };
  return (
    <>
      <div className="view_product_heading container-fluid">
        <h1>View Products Details</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered table-striped table-responsive-sm table-responsive-md">
              <thead>
                <tr>
                  <th scope="col">ProductName</th>
                  <th scope="col">productPrice</th>
                  <th scope="col">ProductDesc</th>
                  <th scope="col">ProductQty</th>
                  <th scope="col">ProductImage</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* tbody */}
              <tbody>
                {productdata.map((d) => {
                  return (
                    <tr>
                      <td>{d.pname}</td>
                      <td>{d.pprice}</td>
                      <td>{d.pdesc}</td>
                      <td>{d.pqty}</td>
                      <td>
                        {" "}
                        <img src={"http://localhost:5000/"+d.pic} alt="" className="img-fluid" style={{maxWidth: "200px", maxHeight: "200px"}} />
                      </td>
                      {/* <button>Delete</button> */}
                      <i className="bi bi-trash-fill m-3"></i>
                      <i className="bi bi-pencil-square"></i>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminUpdate;