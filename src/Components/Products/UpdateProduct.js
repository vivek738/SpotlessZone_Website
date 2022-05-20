// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// const Update =()=>{
//     const {_id}  = useParams();

//     const [prodata, setProdata] = useState([]);
//     const [pname, setPname] = useState("");
//     const [pdesc, setPdesc] = useState("");
//     const [pqty, setPqty] = useState("");
//     const [pprice, setPprice] = useState("");
//     const {
//         register,
//         handleSubmit,
//         // getValues,
//         formState: { errors },
//       } = useForm({ shouldUseNativeValidation: false });
   

//      //pid is javascript variable so is not used on url
//     useEffect(()=>{

//         axios.get("http://localhost:5000/update-product"+_id)
//         .then(result=>{
//             console.log(result.data)
//             setProdata(result.data);
//             setPname(result.data.pname);
//             setPdesc(result.data.pdesc);
//             setPprice(result.data.pprice);
//             setPqty(result.data.pty)
//         })
//         .catch()
        
//         },[])


// const UpdateProduct =(e)=>{
//     e.preventDefault();
//     const formdata={
//         _id,
//         pname,
//         pprice,pqty,pdesc
//     }
//     axios.put("http://localhost:5000/update-product", formdata).then(result=>{
//         //console.log(result.data);

//     })
// }

//     return(
//         <>
      
//         <div className="hori_line">
//           <hr />
//         </div>
//         <div className="product_details_admin container-fluid">
//           <div className="row">
//             <div className="col-md-12">
//               <h1>Enter Product Details</h1>
//             </div>
//           </div>
//         </div>
//         <div className="add_product_page container">
//           <div className="row">
//             <div className="col-md-10">
//               <div className="card">
//                 <div className="card-body">
//                   <div className="row">
//                     <div className="col-md-12">
//                       {/* customer form */}
//                       <form
//                         method="POST"
//                         action=""
//                         onSubmit={handleSubmit(onSubmitAddProductData)}
//                         encType="multipart/form-data"
//                       >
                        
                        
//                         {/* input field for product name */}
//                         <div className="form-group">
//                           <label htmlFor="pname">Product Name</label>
//                           <input
//                             type="text"
//                             className={`form-control ${
//                               errors.setPnam && "invalid"
//                             }`}
//                             placeholder="Enter product name"
//                             autoComplete="nope"
//                             // firstname : validation
//                             {...register("setPname", {
//                               required: "product name is required",
//                               minLength: {
//                                 value: 3,
//                                 message: "product name is too short",
//                               },
//                               maxLength: {
//                                 value: 20,
//                                 message: "product name is too long",
//                               },
//                             })}
//                             // changing data on typing and set data to product name variable and send to database
//                             value={pname}
//                             onChange={(e) => setPname(e.target.value)}
//                           />
//                           {/* for displaying error message on validating */}
//                           {errors.setPname && (
//                             <small className="text-danger">
//                               {errors.setPname.message}
//                             </small>
//                           )}
//                         </div>
//                         {/* input field for product image */}
//                         <div className="form-group">
//                           <label htmlFor="file">Choose Product Image</label>
//                           <input
//                             type="file"
//                             name="image"
//                             className="form-control"
//                             {...register("setImage", {
//                               required: "Choose product image",
//                             })}
//                             onChange={(e) => setImage(e.target.files[0])}
//                           />
//                           {errors.setImage && (
//                             <small className="text-danger">
//                               {errors.setImage.message}
//                             </small>
//                           )}
//                         </div>
//                         {/* input field for product qty */}
//                         <div className="form-group">
//                           <label htmlFor="pqty">Quantity</label>
//                           <input
//                             type="phone"
//                             className={`form-control ${
//                               errors.setPqty && "invalid"
//                             }`}
//                             placeholder="Enter qty number"
//                             {...register("setQuantity", {
//                               required: "qty is required",
//                               min: {
//                                 value: 1,
//                                 message: "Product qty should not be less than 1",
//                               },
//                               pattern: {
//                                 value: /^[0-9\b]+$/,
//                                 message: "Enter digits only",
//                               },
//                             })}
//                             value={pqty}
//                             onChange={(e) => setPqty(e.target.value)}
//                           />
//                           {errors.setPqty && (
//                             <small className="text-danger">
//                               {errors.setPqty.message}
//                             </small>
//                           )}
//                         </div>
                        
                       
//                         {/* input field for product price*/}
//                         <div className="form-group">
//                           <label htmlFor="pprice">Product Price</label>
//                           <input
//                             type="phone"
//                             className={`form-control ${
//                               errors.setPprice && "invalid"
//                             }`}
//                             placeholder="Enter product price"
//                             {...register("setPprice", {
//                               required: "product price is required",
//                               pattern: {
//                                 value: /^[0-9\b]+$/,
//                                 message: "Enter digits only",
//                               },
//                             })}
//                             value={pprice}
//                             onChange={(e) => setPprice(e.target.value)}
//                           />
//                           {errors.setPprice && (
//                             <small className="text-danger">
//                               {errors.setPprice.message}
//                             </small>
//                           )}
//                         </div>
//                         {/* input field for product desc */}
//                         <div className="form-group">
//                           <label htmlFor="pdesc">Description</label>
//                           <textarea
//                             type="text"
//                             className={`form-control ${
//                               errors.setPdesc && "invalid"
//                             }`}
//                             id="exampleFormControlTextarea1"
//                             rows="2"
//                             placeholder="write something for it"
//                             {...register("setPdesc", {
//                               required: "description is required", // JS only: <p>error message</p> TS only support string
//                             })}
//                             value={pdesc}
//                             onChange={(e) => setPdesc(e.target.value)}
//                           ></textarea>
//                           {errors.setPdesc && (
//                             <small className="text-danger">
//                               {errors.setPdesc.message}
//                             </small>
//                           )}
//                         </div>
//                         <button
//                           type="submit"
//                           className="product_add_btn btn btn-info"
//                         >
//                           Submit
//                         </button>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     )
// }

// export default Update;

// const ProductAddedSuccessToast = () => {
//     return (
//       <>
//         <p className="text-dark">
//           You have successfully added new product !!! Click "OK" to continue..
//         </p>
//         <Link
//           to="/farm/dashboard"
//           className="btn btn-outline-success"
//           style={{
//             fontWeight: "bold",
//             borderRadius: "15px",
//             border: "2px solid green",
//             width: "100%",
//             textAlign: "center",
//           }}
//         >
//           OK
//         </Link>
//       </>
//     );
//   };
//   const WarningToast = () => {
//     return (
//       <>
//         <p className="text-fontweight-bold text-warning">
//           Something Went Wrong!!!
//         </p>
//       </>
//     );
//   };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  