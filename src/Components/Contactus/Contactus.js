import React from "react";
import './Contactus.css';
import pic from './images/faq.jpg';
import { MDBContainer } from 'mdb-react-ui-kit';


const Contactus = ()=>{
    return(
    <>

    <div className="image">
        <img src= {pic}></img>
    </div>

    <div className="middle">
        <h4 className="heading mt-4">Contact Us</h4>
        <p>We are here to help and answer any question you might have. we look forward to hearing from you.</p>
    </div>
    <MDBContainer>
    <div className=" col-md-5 mx-auto">

    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>

  

  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    </MDBContainer>

    
    
    </>
);
};

export default Contactus;