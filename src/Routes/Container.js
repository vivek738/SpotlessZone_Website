import React from "react";
import { Routes, Route } from "react-router-dom";
import EmailVerify from "../Components/EmailVerify";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Login";
import Update from "../Components/Products/UpdateProduct";
import EditProfile from "../Components/Profile/EditProfile";
import SignUp from "../Components/SignUp";
import { parseJwt } from "../utils/parseJwt";
export const Container = () => {
  //in login branch
  const user = localStorage.getItem("token");
  const decodeUser = parseJwt(user)
  console.log(decodeUser.user)
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        {
          decodeUser.user?.role === "admin"?
          <Route path="/edit-profile" element={<EditProfile />}></Route>
          :
          <></>
        }
        {/* {user && (
          
        )} */}
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        {/* <Route path="/" exact element={<Navigate replace to="/login" />} /> */}
        <Route
          path="/customer/register/:id/verify/:token"
          element={<EmailVerify />}
        />
        <Route path='/update-product' element={<Update/>}></Route>
        <Route path="/edit-profile" element={<EditProfile />}></Route>
      </Routes>
    </>
  );
};
