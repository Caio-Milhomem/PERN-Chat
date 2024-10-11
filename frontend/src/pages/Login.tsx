import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    login(inputs.userName, inputs.password);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background:
          "url(your-background-image-url) no-repeat center center fixed",
        backgroundSize: "cover",
      }}
    >
      <form
        className="bg-light p-4 rounded shadow"
        style={{ width: "400px" }}
        onSubmit={handleSubmitForm}
      >
        <h2 className="text-center mb-4">
          Login <span className="text-primary">ChatApp</span>
        </h2>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            value={inputs.userName}
            onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>

        <Link to={"/signup"}>Don't have an account ?</Link>

        <button
          type="submit"
          className="btn btn-primary w-100 mt-3"
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
