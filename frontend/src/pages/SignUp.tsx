import { Link } from "react-router-dom";
import "../App.css";
const SignUp = () => {
  return (
    <div>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
        }}
      >
        <form
          className="bg-light p-4 rounded shadow"
          style={{ width: "400px" }}
        >
          <h2 className="text-center mb-4 fw-bold">
            Sign Up <span>ChatApp</span>
          </h2>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label fw-bold">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-bold">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter User Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-bold">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Gender</label>
            <div>
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male" className="ms-1">
                Male
              </label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female" className="ms-1">
                Female
              </label>
            </div>
          </div>
          <Link to={"/login"}>Already have a account ?</Link>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
