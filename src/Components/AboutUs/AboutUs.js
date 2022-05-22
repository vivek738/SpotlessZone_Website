import React from 'react';
import First from '../../Images/first.png';
import Third from '../../Images/third.jpg';
import Header from '../Homepage/Header';
import Vivek from '../../Images/vivek.jpg';
import Suraj from '../../Images/suraj.jpg';
import Ramesh from '../../Images/ramesh.jpg';
import Punam from '../../Images/punam.jpg';



const AboutUs = () => {
  return (
    <>

      <div className="container-fluid homeImg py-3" style={{ paddingTop: 70, backgroundColor: "#ebebeb", background: `url(${First})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "50vh", backgroundSize: "cover", position: "relative" }}>
        <Header></Header>

        <div className="bread-crumb-section d-flex justify-content-center align-items-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" className='text-decoration-none fs-5 text-success'>Home</a>
              </li>
              <li className="breadcrumb-item active fs-5 text-white" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* another section here */}


      <div className="container-fluid" style={{ paddingTop: 50, background: "white" }}>
        <div className="container col-md-12 pt-5">
  
          <h3 className="text text-center text-success pb-3">WHY CHOOSE US?</h3>
          <div className="row mb-6">
            <div className="col-md-5">
              <div className=" py-1 px-12 ms-9">
                <img src={Third} alt="first" height="300px" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="py-1 px-12 ms-8 ">
                <h2 className="text text-start text-dark pt-0">Best Service In The Town</h2>
                <p className="text text-start text-secondary me-10 pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quis porro
                  magnam quibusdam reiciendis. Dicta, cum soluta facilis similique labore nisi,
                  quam nulla, beatae deserunt quia ducimus modi voluptatem iusto odit at est. Consequatur
                  aperiam aliquam repellat magni corrupti similique. Tempora neque odio sapiente? Fuga
                  consectetur in aperiam praesentium eius veritatis, quas perferendis architecto sequi
                  suscipit, aliquam dolores voluptatibus minima culpa ducimus natus excepturi dolorem optio
                  sit dolore repellat? Laboriosam unde minus beatae ut vero dignissimos tenetur! Corporis ipsa
                  ab iusto reiciendis qui est ad facere aut! A nihil culpa iure repellendus, doloremque animi,
                  voluptatibus accusantium adipisci dolores nam saepe?
                </p>

                <button className="btn btn-success mt-3">Learn More...</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of */}

      <div>

        <div className="container col-md-10 my-5">
          <div className="row">
            <div className="col-md-4">
              <div className="p-3 shadow mx-3 rounded bg-light">
                <p className="text text-secondary text-center h5 fw-bold mb-2 text-success">Mission</p>
                <p className="text text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione exercitationem tenetur sapiente qui eaque esse neque eligendi fugiat nam explicabo, consequatur atque. Consequuntur exercitationem nostrum nisi ipsa mollitia praesentium quasi?
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 shadow mx-3 rounded bg-light">
                <p className="text text-secondary text-center h5 fw-bold mb-2 text-success">Statement</p>
                <p className="text text-muted">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem non a architecto asperiores quam commodi expedita ducimus temporibus tempore totam atque delectus nesciunt, molestiae rem quasi magnam error sapiente consectetur?                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 shadow mx-3 rounded bg-light">
                <p className="text text-secondary text-center h5 fw-bold mb-2 text-success">Vision</p>
                <p className="text text-muted">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur labore accusamus veritatis libero perspiciatis nostrum qui excepturi assumenda repudiandae voluptatem consequatu. Lorem, ipsum.  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our team */}
      <div className="container-fluid bg-light pb-3" style={{ paddingTop: 75, background: "ebebeb" }}>
        <div className="container col-md-10">
        
          <h3 className="text text-center text-success pb-2">
            OUR TEAM
          </h3>
          <div className="row">
            <div className="col-md-4 mb-2">
              <div className="me-5 bg-white rounded shadow mx-2">
                <img src={Suraj} alt="" className="img-fluid w-100 px-3 pt-3 rounded" height="120px" />
                <div className="py-1 px-2">
                  <h4 className="text-center text-success text-start ">Suraj Gyawali</h4>
                  <h5 className="text-center text-black text-start">
                    Frontend Developer
                  </h5>


                </div>
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div className="me-5 bg-white rounded shadow mx-2">
                <img src={Vivek} alt="" className="img-fluid w-100 px-3 pt-3 rounded" height="140px" />
                <div className="py-1 px-2">
                  <h4 className="text-center text-success text-start ">Vivek Sah</h4>
                  <h5 className="text-center text-black text-start">
                    Export In UI & UX
                  </h5>


                </div>
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div className="me-5 bg-white rounded shadow mx-2">
                <img src={Ramesh} alt="" className="img-fluid w-100 px-3 pt-3 rounded" height="120px" />
                <div className="py-1 px-2">
                  <h4 className="text-center text-success text-start ">Ramesh Pathak</h4>
                  <h5 className="text-center text-black text-start">
                    Frontend Developer
                  </h5>


                </div>
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div className="me-5 bg-white rounded shadow mx-2">
                <img src={Punam} alt="" className="img-fluid w-100 px-3 pt-3 rounded" height="120px" />
                <div className="py-1 px-2">
                  <h4 className="text-center text-success text-start ">Punam Oli</h4>
                  <h5 className="text-center text-black text-start">
                    Frontend Developer
                  </h5>


                </div>
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div className="me-5 bg-white rounded shadow mx-2">
                <img src={First} alt="" className="img-fluid w-100 px-3 pt-3 rounded" height="120px" />
                <div className="py-1 px-2">
                  <h4 className="text-center text-success text-start ">Dipika Bogoti</h4>
                  <h5 className="text-center text-black text-start">
                    Frontend Developer
                  </h5>


                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

    </>
  )
}

export default AboutUs