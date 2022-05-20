
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
const UpdateProduct = () => {
  // for holding the particular category id
  const { productid } = useParams();
  const [pname, setpname] = useState("");
  const [pdesc, setpdesc] = useState("");
  const [pprice, setpprice] = useState("");
  
  const [pqty, setpqty] = useState("");
  
  const [pic, setpic] = useState("");
  //   holding data
  
  const [productdata, setProductdata] = useState([]);
  // token for admin
  
  //   for display category info initail when page is render
  useEffect(() => {
    
    axios
      .get("http://localhost:90/product/singleproduct/"+productid, )
      .then((getResult) => {
        // console.log(result.data);
        setProductdata(getResult.data);
        setpname(getResult.data.pname);
        setpdesc(getResult.data.pdesc);
        setpprice(getResult.data.pprice);
        
        setpqty(getResult.data.pqty);
        
        setpic(getResult.data.pic);
      })
      .catch();
  }, []);
  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: false });
  const onSubmitProductUpdateForm = (data, e) => {
    e.preventDefault();
    const productUpdateForm = new FormData();
    productUpdateForm.append("productid", productid);
    productUpdateForm.append("pname", pname);
    productUpdateForm.append("pdesc", pdesc);
    productUpdateForm.append("pprice", pprice);
   
    productUpdateForm.append("pqty", pqty);
    
    productUpdateForm.append("pic", pic);
    axios
      .put(
        "http://localhost:90/product/updateproduct",
        productUpdateForm,
        
      )
      .then((result) => {
        if (result.data.success) {
          toast.success(<ProductUpdateSuccessToast />, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: false,
          });
          setpname("");
          setpdesc("");
          setpprice("");
         
          setpqty("");
          
          setpic("");
        }
      })
      .catch((e) => {
        toast.warn(<WarningToast />, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: true,
        });
      });
  };
  return (
    <>
      
      <div className="hori_line">
        <hr />
      </div>
      <div className="farm_product_heading container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Update Product For Sale</h1>
          </div>
        </div>
      </div>
      <div className="farm_product_page container">
        <div className="row">
          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    {/* customer form */}
                    <form
                      method="POST"
                      action=""
                      onSubmit={handleSubmit(onSubmitProductUpdateForm)}
                      encType="multipart/form-data"
                    >
                      
                      {/* input field for product name */}
                      <div className="form-group">
                        <label htmlFor="pname">Product Name</label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.setpname && "invalid"
                          }`}
                          placeholder="Enter product name"
                          autoComplete="nope"
                          // firstname : validation
                          {...register("setpname", {
                            required: "product name is required",
                            minLength: {
                              value: 3,
                              message: "product name is too short",
                            },
                            maxLength: {
                              value: 20,
                              message: "product name is too long",
                            },
                          })}
                          // changing data on typing and set data to product name variable and send to database
                          value={pname}
                          onChange={(e) => setpname(e.target.value)}
                        />
                        {/* for displaying error message on validating */}
                        {errors.setpname && (
                          <small className="text-danger">
                            {errors.setpname.message}
                          </small>
                        )}
                      </div>
                      {/* input field for product pic */}
                      <div className="form-group">
                        <label htmlFor="file">Choose Product pic</label>
                        <input
                          type="file"
                          name="pic"
                          className="form-control"
                          {...register("setpic", {
                            required: "Choose product pic",
                          })}
                          onChange={(e) => setpic(e.target.files[0])}
                        />
                        {errors.setpic && (
                          <small className="text-danger">
                            {errors.setpic.message}
                          </small>
                        )}
                      </div>
                      {/* input field for product qty */}
                      <div className="form-group">
                        <label htmlFor="pqty">pqty</label>
                        <input
                          type="phone"
                          className={`form-control ${
                            errors.setpqty && "invalid"
                          }`}
                          placeholder="Enter qty number"
                          {...register("setpqty", {
                            required: "qty is required",
                            min: {
                              value: 1,
                              message: "Product qty should not be less than 1",
                            },
                            pattern: {
                              value: /^[0-9\b]+$/,
                              message: "Enter digits only",
                            },
                          })}
                          value={pqty}
                          onChange={(e) => setpqty(e.target.value)}
                        />
                        {errors.setpqty && (
                          <small className="text-danger">
                            {errors.setpqty.message}
                          </small>
                        )}
                      </div>
                      
                      {/* input field for product price*/}
                      <div className="form-group">
                        <label htmlFor="pprice">Product Price</label>
                        <input
                          type="phone"
                          className={`form-control ${
                            errors.setpprice && "invalid"
                          }`}
                          placeholder="Enter product price"
                          {...register("setpprice", {
                            required: "product price is required",
                            pattern: {
                              value: /^[0-9\b]+$/,
                              message: "Enter digits only",
                            },
                          })}
                          value={pprice}
                          onChange={(e) => setpprice(e.target.value)}
                        />
                        {errors.setpprice && (
                          <small className="text-danger">
                            {errors.setpprice.message}
                          </small>
                        )}
                      </div>
                      {/* input field for product desc */}
                      <div className="form-group">
                        <label htmlFor="pdesc">Description</label>
                        <textarea
                          type="text"
                          className={`form-control ${
                            errors.setpdesc && "invalid"
                          }`}
                          id="exampleFormControlTextarea1"
                          rows="2"
                          placeholder="write something for it"
                          {...register("setpdesc", {
                            required: "description is required", // JS only: <p>error message</p> TS only support string
                          })}
                          value={pdesc}
                          onChange={(e) => setpdesc(e.target.value)}
                        ></textarea>
                        {errors.setpdesc && (
                          <small className="text-danger">
                            {errors.setpdesc.message}
                          </small>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="farm_product_add_btn btn btn-info"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UpdateProduct;
const ProductUpdateSuccessToast = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center bg-gradient">
            <p className="text-dark">
              You have successfully updated product !!! Click "OK" to continue..
            </p>
            <Link
              to="/farm/dashboard/farmviewproduct"
              className="btn btn-outline-success"
              style={{
                fontWeight: "bold",
                borderRadius: "15px",
                border: "2px solid green",
              }}
            >
              OK
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
const WarningToast = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center bg-gradient">
            <p className="text-fontweight-bold text-warning">
              Something Went Wrong!!!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};