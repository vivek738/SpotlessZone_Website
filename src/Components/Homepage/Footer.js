import React from 'react'

const Footer = () => {
    return (
        <>
        <footer>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-3">
              <h4>
                ABOUT <span className="text-white">US</span>
              </h4>
              {/* <h5>SpotlessZone</h5> */}
              <p>
                <span style={{ fontSize: "25px", color: "rgb(50, 204, 232)" }}>
                  S
                </span>
                potless{" "}
                <span style={{ fontSize: "25px", color: "rgb(50, 204, 232)" }}>
                  Z
                </span>
                one quickly built a reputation as one of the leading providers
                of residential and commercial cleaning solutions. Our focus is
                to listen to our clients, understand their needs and provide the
                exceptional level of cleaning service.
              </p>
            </div>
            <div className="col-md-3">
              <h4>SERVICES</h4>
              <p>
                <a href="/">Floor and carpet</a>
              </p>
              <p>
                <a href="/">House Painting</a>
              </p>
              <p>
                <a href="/">Kitchen Cleaning</a>
              </p>
              <p>
                <a href="/">Office Cleaning</a>
              </p>
              <p>
                <a href="/">Job Recruting</a>
              </p>
              <p>
                <a href="/">Window Cleaning</a>
              </p>
            </div>
            <div className="col-md-3">
              <h4>CONTACT INFO</h4>
              <p>
                <span>
                  <i className="bi bi-house-door-fill"></i> Kathmandu, NEPAL
                </span>
              </p>
              <p>
                <span>
                  <i className="bi bi-envelope-fill"></i>{" "}
                  contact@spotlesszone.com
                </span>
              </p>
              <p>
                <span>
                  <i className="bi bi-telephone-fill"></i> +977-9800834601
                </span>
              </p>
              <p>
                <span>
                  <i className="bi bi-clock"></i> Mon-Fri: 08.00 am - 05:00 pm
                </span>
              </p>
              <p>
                <span>
                  <i className="bi bi-clock"></i>Saturday, Sunday: closed
                </span>
              </p>
            </div>
            <div className="col-md-3">
              <h4 style={{ marginBottom: "50px" }}>NEWSLETTER</h4>
              <p>Subscribe our newsletter to get our latest update & news</p>
              <form action="">
                <div className="form-group emailBox">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="newsLetter"
                  />
                  <span
                    className="telegramIcon"
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    <i className="bi bi-telegram"></i>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* for copyright */}
        <div className="copyright_footer container-fluid">
          <p>
            © 2020 Copyright:{" "}
            <span>
              <a href="/">SpotlessZone.com</a>
            </span>
          </p>
        </div>
      </footer>
      </>
    )
}

export default Footer