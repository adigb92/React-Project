import { useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup";
import User from "../interfaces/User";
import { checkUser } from "../services/usersService";
import { Link, useNavigate } from "react-router-dom";
import { errorMsg, successMsg } from "../services/feedbacks";
import Navbar from "./Navbar";



interface LoginProps { setIsLoggedIn: Function; setIsBusiness: Function; }

const Login: FunctionComponent<LoginProps> = ({ setIsLoggedIn, setIsBusiness }) => {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().required().email().min(5),
      password: yup.string().required().min(8),
    }),
    onSubmit: (values: User) => {
      checkUser(values)
        .then((res) => {
          if (res.data.length) {
            navigate("/home");
            sessionStorage.setItem(
              "userData",
              JSON.stringify({
                isLoggedIn: true,
                isBusiness: res.data[0].isBusiness,
                userId: res.data[0].id,
              })
            );
            setIsLoggedIn(true);
            setIsBusiness(res.data[0].isBusiness);
            successMsg("Logged In");
          } else errorMsg("Wrong email or password");
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <>
      <div className="container mt-3 col-md-4 text-center">
        <h3 className="display-3">LOGIN</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Email address</label>
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingPassword">Password</label>
            {formik.touched.password && formik.errors.password && (
              <p className="text-danger">{formik.errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 my-3"
            disabled={!formik.dirty || !formik.isValid}
          >
            Login
          </button>
        </form>
        <Link to="/register">New user? Register here</Link>
      </div>
      <div className="container text-center">
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            navigate("/businessregister");
          }}
        >
          Create Business Account
        </button>
      </div>
    </>
  );
};

export default Login;
