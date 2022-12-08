import React, { useState } from "react";
import "../../App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const showIcon = <FontAwesomeIcon icon={faEye} />;
  const hideIcon = <FontAwesomeIcon icon={faEyeSlash} />;

  const onSubmit = () => {
    axios.post( {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="contained-reg">
      <div className="container">
        <div className="form">
          <h1 className="header">Register</h1>
          <div className="upperlogin">
            <div className="fname">
              <input
                type="text"
                className="input"
                placeholder="First Name"
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="lname">
              <input
                type="text"
                className="input"
                placeholder="Last Name"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>
          <div className="lowerlogin">
            <div className="email">
              <input
                type="text"
                className="input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password-cont">
              <div className="password">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? showIcon : hideIcon}
                </button>
              </div>
            </div>
          </div>
          <div className="btncont">
            <button type="button" className="submit" onClick={onSubmit}>
              Submit
            </button>
          </div>
          <div className="alr">
              <Link className="alr-link" to={"/login"}> Već Imaš Račun? Ulogiraj Se Ovdje.</Link>
              <p><Link className="alr-link" to={"/"}> Nazad Na Homepage.</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
