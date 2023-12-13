import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const signup = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:8000/userdata", values)
        .then((res) => {
          navigate("/dashboard", { replace: true });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  });

  return (
    <>
      <div className="signup-page vh-100 d-flex justify-content-center align-items-center">
        <div className="login-container rounded-2 p-4 bg-transparent">
          <div className="mb-4 text-center text-success">
            <FontAwesomeIcon icon={faUserPlus} size="5x" />
          </div>

          <form onSubmit={signup.handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name">Name:</label>
              <input
                type="name"
                className="form-control mt-1 bg-light"
                id="name"
                value={signup.values.name}
                onChange={signup.handleChange}
                required
              />
            </div>
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
            <hr />

            <button className="btn btn-success w-100" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
