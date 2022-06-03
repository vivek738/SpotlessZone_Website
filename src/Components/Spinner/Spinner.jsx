import React from "react";
// import spinner from "../../Images/spinner.gif"
import "./Spinner.css"
const Spinner = () => {
  
  return (
    <>
      <div className="container text-center">
            {/* <img src={spinner} alt="spinner" /> */}
            <div className="loader"></div>
      </div>
    </>
  );
};

export default Spinner;
