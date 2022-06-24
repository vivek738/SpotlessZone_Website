import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Homepage/Header";
import bgImg from "../../Images/first.png"
import styles from "./styles.module.css";

const ForgotPasswort = () => {
  const [email, setEmail] = useState("");

  const [msg, setMsg] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("somethingw ent worng");
    try {
        console.log("axios")
      const url = "http://localhost:5000/password-reset";
      const { data } = await axios.post(url, { email });
      setMsg(data.message);
      setError("");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg("");
      }
    }
  };
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
          <h1 className="text-center text-white my-4 fw-bold">Forgot Password Page</h1>
          <div className="row text-center">
            <Link className="text-success fw-bold text-decoration-none" to="/">
              Home &gt;&gt; <span className="text-white">Forgot Password</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h5 className="fw-bold p-4">Reset Your Password</h5>
          <div className="form-group">
          <label htmlFor="email" className="fw-bold py-2 ps-2">E-mail Address</label>
          <input
            type="email"
            placeholder="Provide us your e-mail address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          </div>
          {error && <div className={styles.error_msg}>{error}</div>}
          {msg && <div className={styles.success_msg}>{msg}</div>}
          <button type="submit" className={styles.green_btn}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgotPasswort;
