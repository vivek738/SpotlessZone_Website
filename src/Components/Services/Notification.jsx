import axios from "axios";
import React, { useEffect } from "react";

const Notification = () => {
  //all notifications : no matter either visible or not

  // const [notiData, setNotiData] = useState([]);

  useEffect(() => {
    //   for all notification either visible or not

    axios
      .get("http://localhost:5000/service/all-noti")
      .then((response) => {
        if (response) {
          // console.log(`checking 2nd cond: ${l.length}`)  
          //   setNotiData(response.data);
          if (response.data && response.data.isVisible) {
            console.log("false data: " + response.data[0].isVisible);
          } else if (response.data && !(response.data.isVisible)) {
            console.log("true data: " + response.data[0].isVisible);
          }
        } else {
          console.log("all true");
        }
      })

      .catch(() => {
        console.log("error occur");
      });
  });

  return (
    <>
      <div className="cont">
        <h1>Notification</h1>

        {/* onClick={handleSeen} */}
        <div className="row text-center">
          {/*

          2 condns
          1. all notifications no matter either visible or not seen
          2. all notifications only not visible 
          
          */}
          {/* {notiData.isVisible && <h1>False Data: {notiData.length}</h1>} */}

          <div className="col-md-4">
            {/* {notiData ? (
              <p>Notifications {notiData.length}</p>
            ) : (
              <h1>No any notification available</h1>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
