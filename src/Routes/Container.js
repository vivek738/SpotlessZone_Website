import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import ProductCart from "../Components/Cart/Cart";
import SingleProductInfo from "../Components/Cart/SingleProuductPage";
import AllProducts from "../Components/Cart/ViewProducts";
import EmailVerify from "../Components/EmailVerify";
import Hiring from "../Components/Hiring/Hiring";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Login";
import Addproduct from "../Components/Products/AddProduct";
import UpdateProduct from "../Components/Products/AdminUpdateproduct";
import Product from "../Components/Products/ViewProduct";
import EditProfile from "../Components/Profile/EditProfile";
import UserProfile from "../Components/Profile/UserProfile";
import AllServices from "../Components/Services/AllServices";
import AddServiceCategory from "../Components/Services/AddServiceCategory";
import UpdateCategoryService from "../Components/Services/UpdateCategoryService";
import ViewServiceCategory from "../Components/Services/ViewServiceCategory";
import SignUp from "../Components/SignUp";
import { parseJwt } from "../utils/parseJwt";
import AddService from "../Components/Services/AddService";
import AllCommercialServices from "../Components/Services/AllCommercialServices";
import AllResidentialServices from "../Components/Services/AllResidentialServices";
import SingleService from "../Components/Services/SingleService";
import AddPicture from "../Components/Gallery/AddPicture";
import DisplayGallery from "../Components/Gallery/DisplayGallery";
import UserDashboard from "../Components/UsedDashboard/UserDashboard";
import TestingService from "../Components/Services/TestingService";
import TestBookService from "../Components/Services/TestingBookService";
import { ToastContainer } from "react-toastify";
import Accordion from "../Components/Faq/Accordion";
import Productfaq from "../Components/Faq/Productfaq";
import Trainingfaq from "../Components/Faq/Trainingfaq";
import Contactus from "../Components/Contactus/Contactus";
import AdminDashboard from "../Components/Admin/AdminDashboard";
import Blogs from "../Components/Blogs/Blogs";
import BlogDetail from "../Components/Blogs/BlogDetail";
import AdminBlogDetail from "../Components/Admin/AdminBlogDetail";
import AdminBlogHome from "../Components/Admin/AdminBlogHome";
import AdminProducts from "../Components/Products/AdminViewProducts";
import AdminUpdateProduct from "../Components/Products/AdminUpdateproduct";
import Notification from "../Components/Admin/Notification";
import ToolTip from "../Components/ToolTIp";
import Gallery from "../Components/galleryy/Gallery";

export const Container = () => {
  //in login branch
  const token = localStorage.getItem("token");
  const decodeUser = parseJwt(token);

  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/tooltip" element={<ToolTip />} />
        {/* for admin purpose only */}
        {token && decodeUser.user?.role === "admin" && (
          <>
            <Route
              path="/admin-dashboard"
              element={<AdminDashboard adminData={decodeUser.user} />}
            ></Route>
            <Route
              path="/update-product/:pid"
              element={<AdminUpdateProduct />}
            ></Route>
            <Route
              exact
              path="/view-admin-products"
              element={<AdminProducts adminData={decodeUser.user} />}
            ></Route>
            <Route path="/addProduct" element={<Addproduct />}></Route>
            <Route path="/notifications" element={<Notification />}></Route>
          </>
        )}

        {/* for customer activity only */}
        {token && decodeUser.user?.role === "user" && (
          <>
            <Route
              path="/all-commercial-services"
              element={<AllCommercialServices />}
            ></Route>
            <Route
              path="/all-residential-services"
              element={<AllResidentialServices />}
            ></Route>
            <Route path="/all-services" element={<AllServices />}></Route>
            <Route
              path="/single-service/:sid"
              element={<SingleService userData={decodeUser.user} />}
            ></Route>
            <Route
              path="/user-dashboard"
              element={<UserDashboard userData={decodeUser.user} />}
            ></Route>
            <Route path="/cart" element={<ProductCart />}></Route>
          </>
        )}
        <Route path="/display-all-products" element={<AllProducts />}></Route>
        <Route
          path="/single-product/:pid"
          element={<SingleProductInfo />}
        ></Route>

        <Route path="/" exact element={<Homepage />} />

        <Route path="/getproduct" element={<Product />}></Route>

        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        <Route
          path="/customer/register/:id/verify/:token"
          element={<EmailVerify />}
        />

        <Route path="/edit-profile" element={<EditProfile />}></Route>
        <Route path="/profile-creation" element={<UserProfile />}></Route>

        <Route path="/job-form-submit" element={<Hiring />}></Route>

        <Route
          path="/add-service-category"
          element={<AddServiceCategory />}
        ></Route>
        <Route
          path="/view-service-category"
          element={<ViewServiceCategory />}
        ></Route>
        <Route
          path="/update-service-category/:scid"
          element={<UpdateCategoryService />}
        ></Route>

        <Route path="/add-service" element={<AddService />}></Route>
        <Route path="/add-services" element={<TestingService />}></Route>
        <Route path="/book-services" element={<TestBookService />}></Route>

        <Route path="/add-picture" element={<AddPicture />}></Route>
        <Route path="/gallery" element={<DisplayGallery />}></Route>

        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>

        <Route path="/getproduct" element={<Product />}></Route>
        <Route path="/update-product/:pid" element={<UpdateProduct />}></Route>

        <Route path="/edit-profile" element={<EditProfile />}></Route>

        <Route path="/faq" element={<Accordion />}></Route>
        <Route path="/productfaq" element={<Productfaq></Productfaq>}></Route>
        <Route
          path="/trainingfaq"
          element={<Trainingfaq></Trainingfaq>}
        ></Route>
        <Route path="/contactus" element={<Contactus></Contactus>}></Route>

        <Route path="/blogs" element={<Blogs />}></Route>

        <Route path="/blogdetail/:id" element={<BlogDetail />}></Route>

        {/* <Route path="/blogpost" element={<AdminBlogPost />}></Route> */}
        <Route path="/admin-blogdetail" element={<AdminBlogDetail />}></Route>
        <Route path="/admin-blog-home" element={<AdminBlogHome />}></Route>

        <Route path="/blogs/blog-details" element={<BlogDetail />}></Route>

        <Route path="/gall" element= {<Gallery/>}></Route>
      </Routes>
    </>
  );
};
