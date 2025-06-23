import { useContext, useState } from "react";
import { SessionContext } from "../context/SessionContext";
import Footer from "../components/static/Footer";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Header from "../components/static/Header";

function Login() {
  const { login } = useContext(SessionContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    try {
      const res = await fetch("data/users.json");
      const users = await res.json();
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!user) {
        setError({ general: "Invalid credentials." });
        return;
      } else {
        if (user.role === "admin") {
          login();
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError({ general: "Login failed. Please try again." });
    }
  };

  return (
    <div>
        <Header />
      <div className="login-page">
        <div className="form-container">
          <h1>Login</h1>
          <div className="mt-4">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
                {error.email && (
                  <p className="invalid-feedback">{error.email}</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
              {error.password && (
                <p className="invalid-feedback">{error.password}</p>
              )}
              <div className="btn-container mb-3">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              {error.general && (
                <p className="invalid-feedback">{error.general}</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
