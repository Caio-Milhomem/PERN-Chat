import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import GenderCheckbox from "../components/GenderCheckbox";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckboxChange = (gender: "male" | "female") => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputs);
  };

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
          onSubmit={handleSubmitForm}
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
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
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
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
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
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            selectedGender={inputs.gender}
            onCheckboxChange={handleCheckboxChange}
          />

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
