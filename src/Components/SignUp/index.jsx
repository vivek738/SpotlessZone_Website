import styles from "./styles.module.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  //using useState hook
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("something went wrong");
    try {
      const url = "http://localhost:5000/customer/register";
      const { data: res } = await axios.post(url, data);
      setMsg(res.message);
      //   navigate("/login");
      //   console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          <div className={styles.left}>
            <h1>Welcome Back</h1>
            <Link to="/login">
              <button type="button" className={styles.white_btn}>
                Sign in
              </button>
            </Link>
          </div>
          <div className={styles.right}>
            <form
              action=""
              className={styles.form_container}
              onSubmit={handleSubmit}
            >
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                className={styles.input}
              />
              <input
                type="phone"
                placeholder="Phone"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                required
                className={styles.input}
              />

              {error && <div className={styles.error_msg}>{error}</div>}
              {msg && <div className={styles.success_msg}>{msg}</div>}

              <button
                type="submit"
                className={styles.green_btn}
                disabled={
                  data.name === "" &&
                  data.email === "" &&
                  data.password === "" &&
                  data.phone === ""
                }
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
