import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //   const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/customer/login";
      await axios
        .post(url, data)
        .then((result) => {
<<<<<<< HEAD
          console.log(result.data);
          localStorage.setItem("token", result.data.data.token);
          window.location = "/";
=======
          console.log(result.data.data.token);
          localStorage.setItem("token", result.data.data.token);
>>>>>>> 23713a55bead9b285c2d8b40d9979f2095c3fdc9
        })
        .catch((err) => {
          console.log(err.response.data.message);
          setError(err.response.data.message);
        });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <h3 style={{ color: "#3bb19b", marginBottom: "2rem" }}>
            Sign In To Your Account
          </h3>

          {/* for social icons registration */}
          <div className={styles.flex}>
            <div className={styles.socialIcons}>
              <div className={styles.facebook}>
                <a href="https://www.facebook.com/">
                  <i
                    className="bi bi-facebook"
                    style={{ color: "#106DB0" }}
                  ></i>
                </a>
              </div>
              <div className={styles.googlePlus}>
                <a
                  href="https://www.gmail.com/"
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ color: "#D20B0B", fontWeight: "bold" }}>
                    <i
                      className="bi bi-google"
                      style={{ color: "#D20B0B" }}
                    ></i>
                    +
                  </span>
                </a>
              </div>
              <div className={styles.twitter}>
                <a href="https://twitter.com/">
                  <i className="bi bi-twitter" style={{ color: "#98DFFD" }}></i>
                </a>
              </div>
            </div>
          </div>

          {/* text */}
          <div className={styles.text}>
            <span>Or Use Your Gmail Account</span>
          </div>
          <form
            action=""
            className={styles.form_container}
            onSubmit={handleSubmit}
          >
            {/* gmail input */}
            <div className={styles.inputIcons}>
              <i class="bi bi-envelope-fill"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
                className={styles.inputField}
              />
            </div>
            {/* pass input */}
            <div className={styles.inputIcons}>
              <i class="bi bi-lock-fill"></i>
              <input
                type="text"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                className={styles.inputField}
              />
            </div>

            <a
              to="/forgot-password"
              style={{ alignSelf: "flex-end", color: "#C5C2D0" }}
            >
              <p
                style={{
                  padding: "0 15px",
                  cursor: "pointer",
                  color: "#1C75FB",
                }}
              >
                Forgot Password ?
              </p>
            </a>

            {error && <div className={styles.error_msg}>{error}</div>}
            <button
              type="submit"
              className={styles.green_btn}
              disabled={data.email === "" && data.password === ""}
            >
              SIGN IN
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h2 style={{ color: "#fff", marginBottom: "2rem" }}>
            Hello Friends,
          </h2>
          <span style={{ color: "#fff", fontSize: ".9rem" }}>
            Enter Your Personal Info And Start <br />
            Your Journey With Us...
          </span>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
