import React from 'react'
import BookingPage from './BookingPage'
import ChooseUs from './ChooseUs'

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
      <BookingPage />
      <ChooseUs />

    </>

   

  )
}

export default Homepage