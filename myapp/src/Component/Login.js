import React, { useState } from "react";
import f from "../Image/f.jpg";
import styles from "./Login.module.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (uname.trim() !== "") {
      alert("Welcome " + uname);
    } else {
      alert("Invalid Data");
    }
  };

  return (
    <div className={styles.head}>
      <div className="col-6 col-xl-6 col-md-6 col-sm-12">
        <img className={styles.image} src={f} alt="" />
      </div>

      <div className="col-6 col-xl-6 col-md-6 col-sm-12">
        <form onSubmit={submitHandler} className={styles.login}>
          <h3 className="p-3">Login Here</h3>
          <input
            type="text"
            name="uname"
            value={uname}
            onChange={(e) => {
              setUname(e.target.value);
            }}
            placeholder="Username"
          />{" "}
          <br />
          <br />
          <input
            type="password"
            name="pwd"
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            placeholder="Password"
          />
          <br />
          <br />
          <div className={styles.register}>
            <NavLink to="/register">
              <li>Register here</li>
            </NavLink>
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-success mt-3 p-2"
          />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default Login;
