import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import EmailVerify from "../Components/EmailVerify";
import Login from "../Components/Login";
import Addproduct from "../Components/Products/AddProduct";
import UserProfile from "../Components/Profile/UserProfile";
import SignUp from "../Components/SignUp";



export const Container = () => {
  //in login branch
  const user = localStorage.getItem("token");
  return (
    <>

   
      <Routes>
        <Route path='/addProduct' element={<Addproduct/>}></Route>
        {user && <Route path="/signup" exact element=""></Route>}
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
        <Route
          path="/customer/register/:id/verify/:token"
          element={<EmailVerify />}
        />
        <Route path='/profile-creation' element={<UserProfile/>}></Route>
        
       
      </Routes>

    </>
  );
};
