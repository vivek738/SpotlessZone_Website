import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductCart from "../Components/Cart/Cart";
import SingleProductInfo from "../Components/Cart/SingleProuductPage";
import AllProducts from "../Components/Cart/ViewProducts";
import EmailVerify from "../Components/EmailVerify";
import Hiring from "../Components/Hiring/Hiring";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Login";
import UpdateProduct from "../Components/Products/UpdateProduct";
import Product from "../Components/Products/ViewProduct";
import EditProfile from "../Components/Profile/EditProfile";
import SignUp from "../Components/SignUp";
import { parseJwt } from "../utils/parseJwt";
export const Container = () => {
  //in login branch
  const user = localStorage.getItem("token");
  const decodeUser = parseJwt(user)
  // console.log(decodeUser.user)
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        {/* {
          decodeUser.user?.role === "admin"?
          <Route path="/edit-profile" element={<EditProfile />}></Route>
          :
          <></>
        } */}

        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        {/* <Route path="/" exact element={<Navigate replace to="/login" />} /> */}
        <Route
          path="/customer/register/:id/verify/:token"
          element={<EmailVerify />}
        />
        <Route path='/job-form-submit' element={<Hiring/>}></Route>
        <Route path='/cart' element={<ProductCart/>}></Route>

        <Route path='/display-all-products' element={<AllProducts/>}></Route>
        <Route path='/single-product/:pid' element={<SingleProductInfo/>}></Route>




        <Route path='/getproduct' element={<Product/>}></Route>
        <Route path='/update-product/:pid' element={<UpdateProduct/>}></Route>
        <Route path="/edit-profile" element={<EditProfile />}></Route>
      </Routes>
    </>
  );
};
