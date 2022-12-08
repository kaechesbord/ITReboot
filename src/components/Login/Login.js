import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios"


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email] = useState("")
  const [password] = useState("")
  const showIcon = <FontAwesomeIcon icon={faEye} />;
  const hideIcon = <FontAwesomeIcon icon={faEyeSlash} />;

  const onSubmit = () => {
    axios.post("https://b053-178-209-19-23.eu.ngrok.io/login", {
        email,
        password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    console.log({ data });
    onSubmit(data);
    reset();
  };
  return (
    <div className="contained-log">
    <div className="container">
      <form className="form2" >
        <h1 className="header">Login</h1>
        <div className="lowerlogin2">
          <div className="email2">
            <input type="text" className="input" placeholder="Email" {...register("email")} required/>
          </div>
          <div className="password-cont">
            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
                {...register("password")} required
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
          <button type="button" onClick={handleSubmit(onSubmitHandler)} className="submit">
            Login
          </button>
        </div>
        <div className="alr">     
           <Link className="alr-link" to={"/register"}> Nemaš Korisnički Račun? Registriraj Se Ovdje.</Link>
           <p><Link className="alr-link" to={"/"}> Nazad Na Homepage.</Link></p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;