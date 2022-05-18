import React from 'react'
import cImage from "../../Images/second.png"
const ChooseUs = () => {
  return (
      <>
      <div className="chooseUsSection container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Why Chooose Us</h1>
            <hr
              style={{
                height: "3px",
                width: "10%",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#2EFEF7",
              }}
            />
            <p className="text-dark">
              SpotlessZone operates in Kathmandu and provides a variety of
              cleaning services. Choose us because of our reputation for
              excellence.
            </p>
          </div>
          <div className="row my-5" style={{ justifyContent: "center" }}>
            <div className="col-md-3">
              <span
                style={{
                  fontSize: "2rem",
                  margin: "0 0 5rem 18rem",
                  color: "rgb(8, 130, 8)",
                }}
              >
                <i class="bi bi-gem "></i>
              </span>
              <h2>SPARKLING CLEAN</h2>
              <p>
                We keep your home sparkling clean and germ free. Our
                disinfecting process kills 99% of common bacteria and viruses.
              </p>
            </div>
            <div className="col-md-3">
              <div className="imageSection">
                <img
                  src={cImage}
                  alt=""
                  className="img-fluid"
                  style={{
                    width: "300px",
                    borderRadius: "80%",
                    height: "300px",
                    position: "absolute",
                    top: "20",
                  }}
                />
              </div>
            </div>
            <div className="col-md-3">
              <span
                style={{
                  fontSize: "2rem",
                  margin: "0 0 5rem 18rem",
                  color: "rgb(8, 130, 8)",
                }}
              >
                <i class="bi bi-house-door"></i>
              </span>
              <h2>LEADING TECHNOLOGIES</h2>
              <p>
                We use safe hospital-grade disinfectants, HEPA filtrations and
                microfiber cleaning cloths to reduce cross contamination.
              </p>
            </div>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-md-3 ">
              <span
                style={{
                  fontSize: "2rem",
                  margin: "0 0 5rem 18rem",
                  color: "rgb(8, 130, 8)",
                }}
              >
                <i class="bi bi-umbrella"></i>
              </span>
              <h2>INSURED AND BONDED</h2>
              <p>
                Our cleaners are insured and bonded so no need to worry about
                your apartment, office or garden.
              </p>
            </div>
            <div
              className="reliableCrewSec col-md-3"
              style={{ marginLeft: "23rem" }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  margin: "0 0 5rem 18rem",
                  color: "rgb(8, 130, 8)",
                }}
              >
                <i class="bi bi-people"></i>
              </span>
              <h2>RELIABLE CREWS</h2>
              <p>
                Our reliable and stable crews understand your specific house and
                office clearning service needs.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                className="exploreSect"
                style={{ marginLeft: "39rem", marginTop: "5rem" }}
              >
                <button
                  className="btn btn-info text-white font-weight-bold"
                  style={{ width: "20%" }}
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
 
  )
}

export default ChooseUs