import { Link } from "react-router-dom";
import "../App.css";

const Login = () => {
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
      <form className="bg-light p-4 rounded shadow" style={{ width: "400px" }}>
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
          />
        </div>

        <Link to={"/signup"}>Don't have an account ?</Link>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
