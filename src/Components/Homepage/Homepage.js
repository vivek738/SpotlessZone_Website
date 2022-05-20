import React from 'react'
import BookingPage from './BookingPage'
import ChooseUs from './ChooseUs'
import Footer from './Footer'
import Navbar from './Navbar'
import './Homepage.css'


const Homepage = () => {
    return (
        <>
        <Navbar />
      <section className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h2>Let's Make Your Home free from mess!</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus fugiat id at soluta accusamus ad, ipsum non
                consequuntur consequatur iste!
              </p>
              <a href="/home" className="readMore">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <BookingPage/>
      <ChooseUs/>
    
      </>

        // <>
        //     <Header />
        //     <div className="container-fluid" style={{ paddingTop: 0, background: "#ebebeb" }}>
        //         <div
        //             id="carouselExampleIndicators"
        //             className="carousel slide"
        //             data-bs-ride="carousel"
        //         >
        //             <div className="carousel-indicators">
        //                 <button
        //                     type="button"
        //                     data-bs-target="#carouselExampleIndicators"
        //                     data-bs-slide-to={0}
        //                     className="active"
        //                     aria-current="true"
        //                     aria-label="Slide 1"
        //                 />
        //                 <button
        //                     type="button"
        //                     data-bs-target="#carouselExampleIndicators"
        //                     data-bs-slide-to={1}
        //                     aria-label="Slide 2"
        //                 />
        //                 <button
        //                     type="button"
        //                     data-bs-target="#carouselExampleIndicators"
        //                     data-bs-slide-to={2}
        //                     aria-label="Slide 3"
        //                 />
        //             </div>
        //             <div className="carousel-inner" style={{ height: '160vh' }}>
        //                 <div className="carousel-item active">
        //                     <div className="container col-md-11">
        //                         <div className="row mt-md-5 mt-0">
        //                             <div className="col-md-6">

        //                             </div>

        //                             <div className="col-md-90">
        //                                 <img src={Image} className="d-block img-fluid me-5" alt="..." />

        //                                 <div className="p-3 mt-md-0 mt-0">
        //                                     <h1 className="text text-dark ms-1 mt-0">Lets Clean Our Houses By Using Spotless Zone</h1>
        //                                 </div>

        //                             </div>

        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="carousel-item">
        //                     <div className="container col-md-11">
        //                         <div className="row mt-md-5 mt-0">
        //                             <div className="col-md-6">


        //                             </div>
        //                         </div>
        //                         <div className="col-md-100">
        //                             <img src={Image} className="d-block img-fluid me-5" alt="..." />
        //                             <div className="p-1 mt-md-5 mt-0">

        //                                 <h1 className="text text-dark ms-10 mt-20">Lets Clean Our Houses By Using Spotless Zone</h1>

        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="carousel-item">
        //                     <div className="container col-md-11">
        //                         <div className="row mt-md-5 mt-0">
        //                             <div className="col-md-6">


        //                             </div>
        //                         </div>

        //                         <div className="col-md-100">
        //                             <img src={Image} className="d-block img-fluid me-5" alt="..." />
        //                             <div className="p-1 mt-md-5 mt-0">

        //                                 <h1 className="text text-dark ms-5 mt-2">Lets Clean Our Houses By Using Spotless Zone</h1>
        //                             </div>

        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <button
        //                 className="carousel-control-prev"
        //                 type="button"
        //                 data-bs-target="#carouselExampleIndicators"
        //                 data-bs-slide="prev"
        //             >
        //                 <span className="carousel-control-prev-icon" aria-hidden="true" />
        //                 <span className="visually-hidden">Previous</span>
        //             </button>
        //             <button
        //                 className="carousel-control-next"
        //                 type="button"
        //                 data-bs-target="#carouselExampleIndicators"
        //                 data-bs-slide="next"
        //             >
        //                 <span className="carousel-control-next-icon" aria-hidden="true" />
        //                 <span className="visually-hidden">Next</span>
        //             </button>
        //         </div>

        //     </div>
        //     <Testimonial />
        // </>


    )
}

export default Homepage