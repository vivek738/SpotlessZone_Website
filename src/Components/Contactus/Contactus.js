import React from "react";
import './Contactus.css';
import pic from '../../Images/faq.jpg';
import { MDBContainer } from 'mdb-react-ui-kit';
import gmail from '../../Images/gmail.png';
import placeholder from '../../Images/placeholder.png';
import phonecall from '../../Images/phonecall.png';



const Contactus = () => {
  return (
    <>

      <div className="image">
        <img src={pic} alt=""></img>
      </div>

      <div className="middle">
        <h4 className="heading mt-4">Contact Us</h4>
        <p>We are here to help and answer any question you might have. we look forward to hearing from you.</p>
      </div>
      <MDBContainer>
        <div className=" col-md-5 mx-auto">

          <form>
            <div className="mb-3">
              <input type="email" placeholder="Password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1"></input>
            </div>

            <div className="mb-3">
              <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1"></input>
            </div>




            <button type="submit" className="submit">Submit</button>
          </form>
        </div>

        <div className="last me">
          <div className="row d-flex mt-5">

            <div className="col-md-4">
              <img src={phonecall} alt=""></img>
              <h5>Phone</h5>
              <p>940489374</p>

            </div>

            <div className="col-md-4">
              <img src={gmail} alt="" />

              <h5>E-mail</h5>
              <p>dipikabogat6@gmail.com</p>


            </div>

            <div className="col-md-4">
              <img src={placeholder} alt=""></img>

              <h5>Location</h5>
              <p>51 Street, Newyork City, NYPD
              </p>


            </div>
          </div>
        </div>
      </MDBContainer>



    </>
  );
};

export default Contactus;