import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState([]);
  const navigate = useNavigate();

  const userData = async () => {
    try {
      let res = await axios.get("http://localhost:8000/userdata");
      setLoginData(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const signup = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      loginData.forEach((e) => {
        e.email == values.email && e.password == values.password
          ? navigate("/dashboard", { replace: true })
          : console.log("incorrect password");
      });
    },
  });

  useEffect(() => {
    userData();
  }, []);

  return (
    <>
      <div className="login-page vh-100 d-flex justify-content-center align-items-center">
        <div className="login-container rounded-2 p-4 bg-transparent">
          <div className="mb-4 text-center text-primary">
            <FontAwesomeIcon icon={faUser} size="5x" />
          </div>

          <form onSubmit={signup.handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control mt-1 bg-light"
                id="email"
                value={signup.values.email}
                onChange={signup.handleChange}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control mt-1 bg-light"
                id="password"
                value={signup.values.password}
                onChange={signup.handleChange}
                required
              />
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Login
            </button>
            <hr />

            <div className="mt-4 text-center">
              <Link to={"/register"}>
                <button className="btn btn-success" type="button">
                  Sign Up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
