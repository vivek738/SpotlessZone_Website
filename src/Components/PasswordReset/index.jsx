import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Header from "../Homepage/Header";
import bgImg from "../../Images/first.png";
import styles from "./styles.module.css";

export const SuccessMsg = () => {
  return (
    <>
      <div className="text-center">
        <p className="fw-bold text-success fst-italic">
          You have successfully change the password! <br /> Click "OK" to
          Continue
        </p>
        <Link to={`/login`} className="btn btn-success">
          Ok
        </Link>
      </div>
    </>
  );
};

const PasswordReset = () => {
  const [validUrl, setValidUrl] = useState(false);
  const [password, setPassword] = useState("");
  const [cpass, setConfirmPassword] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: false });

  const param = useParams();
  const url = `http://localhost:5000/password-reset/${param.id}/${param.token}`;
  useEffect(() => {
    const verifyUrl = async () => {
      try {
        await axios.get(url);
        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyUrl();
  }, [param, url]);

  const passResetHandler = async (data, e) => {
    e.preventDefault();
    try {
      await axios
        .post(url, {
          password: password,
        })
        .then((result) => {
          console.log(result.data);
          setPassword("");
          setConfirmPassword("");
          toast.success(<SuccessMsg />, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //if succesfully hit to the api

  return (
    <>
      <div
        className="container-fluid homeImg py-3"
        style={{
          paddingTop: 70,
          backgroundColor: "#ebebeb",
          background: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "40vh",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Header />

        <div className="bread-crumb-section">
          <h1 className="text-center text-white my-4 fw-bold">
            Password Reset Page
          </h1>
          <div className="row text-center">
            <Link className="text-success fw-bold text-decoration-none" to="/">
              Home &gt;&gt; <span className="text-white">Reset Password</span>
            </Link>
          </div>
        </div>
      </div>

      <Fragment>
        {validUrl ? (
          <div className={styles.container}>
            <form
              method="POST"
              className={styles.form_container}
              onSubmit={handleSubmit(passResetHandler)}
            >
              <h4 className="fw-bold p-3 text-center">Add New Password</h4>

              <div className="form-group ps-2 py-2">
                <label htmlFor="password" className="fw-bold pb-2">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${errors.setPassword && "invalid"}`}
                  placeholder="Enter password"
                  autoComplete="nope"
                  {...register("setPassword", {
                    required: "password is required",
                  })}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    outline: "none",
                    border: "none",
                    width: "370px",
                    padding: "15px",
                    borderRadius: "10px",
                    backgroundColor: "#edf5f3",
                    margin: "5px 0",
                    fontSize: "14px",
                  }}
                />
                {errors.setPassword && (
                  <small className="text-danger">
                    {errors.setPassword.message}
                  </small>
                )}
              </div>

              {/* input field for confirm password for customer */}
              <div className="form-group ps-2 py-2">
                <label htmlFor="password" className="fw-bold pb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  // className={styles.input}
                  className={`form-control ${
                    errors.setConfirmPassword && "invalid"
                  }`}
                  placeholder="Enter Same Password Again"
                  autoComplete="nope"
                  {...register("setConfirmPassword", {
                    required: "Password is required",
                    validate: (value) => value === getValues("setPassword"),
                  })}
                  value={cpass}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    outline: "none",
                    border: "none",
                    width: "370px",
                    padding: "15px",
                    borderRadius: "10px",
                    backgroundColor: "#edf5f3",
                    margin: "5px 0",
                    fontSize: "14px",
                  }}
                />
                {errors.setConfirmPassword &&
                  errors.setConfirmPassword.type === "validate" && (
                    <small className="text-danger">
                      Password doesnot match!!
                    </small>
                  )}
              </div>
              <button type="submit" className={styles.green_btn}>
                Submit
              </button>
            </form>
          </div>
        ) : (
          <h1>404 Not Found</h1>
        )}
      </Fragment>
    </>
  );
};
export default PasswordReset;
