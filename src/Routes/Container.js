import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import EmailVerify from "../Components/EmailVerify";
import SignUp from "../Components/SignUp";

export const Container = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
        <Route path="/customer/register/:id/verify/:token" element={<EmailVerify />} />
      </Routes>
    </>
  );
};
