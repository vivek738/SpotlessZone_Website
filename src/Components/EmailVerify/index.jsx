import styles from "./styles.module.css";
import success_img from "../../Images/verify-image.png";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);

  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      await axios
        .get(
          `http://localhost:5000/customer/register/${param.id}/verify/${param.token}`
        )
        .then((result) => {
          if (result.data) {
            setValidUrl(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <>
      <div className="container bg-success">
        {validUrl ? (
          <div className={styles.container}>
            <h1 style={{ marginBottom: "2rem", color: "#fff" }}>
              Email Verified Successfully
            </h1>
            <img
              src={success_img}
              alt="success_img"
              className={styles.success_img}
            />
            <span style={{ color: "#fff" }}>
              Now You Can Login To Your Account
            </span>
            <Link to="/login">
              <button className={styles.green_btn}>Login</button>
            </Link>
          </div>
        ) : (
          <h1>404 Not Found</h1>
        )}
      </div>
    </>
  );
};

export default EmailVerify;
