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
          <h1 className="form-title">Login</h1>
          
          <form onSubmit={handleLogin}>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className={`form-input ${error.email ? "input-error" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && (
                <p className="error-text">{error.email}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className={`form-input ${error.password ? "input-error" : ""}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error.password && (
                <p className="error-text">{error.password}</p>
              )}
            </div>

            {error.general && (
              <p className="error-text">{error.general}</p>
            )}

            <div className="btn-container">
              <button type="submit" className="btn-primary">
                Login
              </button>
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
