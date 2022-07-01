import axios from 'axios'
import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Search = () => {
    let {search}=  useParams()
    const [data, setdata] = React.useState([])

    React.useEffect(() => {
      axios.get("http://localhost:5000/search-service/"+search).then(res=>{setdata(res.data)
    // console.log(res.data)
    })
    }, [])

    var isloading = true;
    
  return (
    <div>
  <div className="container-fluid">
        {/* <h1>{isloading && <Spinner />}</h1> */}
        <div className="row">
          {
            data.map((rData) => {
              return (
                <div className="col-md-4">
                  <div
                    className="resident-service-card card m-3 "
                    style={{
                      cursor: "pointer",
                      boxShadow: "2px 2px 2px 2px #94FFFF",
                    }}
                  >
                    <div className="card-body">
                      <div className="service_image_part">
                        <img
                          src={`http://localhost:5000/${rData.image}`}
                          alt=""
                          className="img-fluid"
                          // style={{ height: "100px", minWidth: "100px" }}
                        />
                      </div>
                      <div className="product_text">
                        <h3 className="py-3">{rData.serviceName}</h3>
                        <p>{rData.serviceDesc}</p>
                      </div>
                      <Link
                        to={`/single-service/${rData._id}`}
                        className="btn btn-info text-center text-white text-uppercase my-3 fw-bold float-end"
                      >
                        Read More &gt;&gt;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  )
}

export default Search