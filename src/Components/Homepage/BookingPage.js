import React from 'react'

const BookingPage = () => {
  return (
      <>
      <div className="bookingForm container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <div className="card">
                  <div className="cardBody">
                    <form action="">
                      <label htmlFor="text">Select Packages</label>
                      <div className="input-group">
                        <select defaultValue="">
                          <option hidden value="">
                            --Select--
                          </option>
                          <option value="--Select--">--Select--</option>
                          <option value="Package1">Package1</option>
                          <option value="Package2">Package2</option>
                          <option value="Package3">Package3</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="cardBody">
                    <form action="">
                      <div className="form-group">
                        <label htmlFor="phone">Choose Date</label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="choose date"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="cardBody">
                    <form action="">
                      <div className="form-group">
                        <label htmlFor="phone">Contact Number</label>
                        <input
                          type="phone"
                          className="form-control"
                          placeholder="Your phone number"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="bookSection">
                  <button type="submit" className="bookBtn btn btn-info">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    
  )
}

export default BookingPage