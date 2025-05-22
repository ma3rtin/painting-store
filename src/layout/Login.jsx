import React, { useContext } from "react";
import Header from "../components/static/Header";
import { SessionContext } from "../context/SessionContext";
import Footer from "../components/static/Footer";

function Login() {
  const { login, logout, isAuthenticated } = useContext(SessionContext);
  return (
    <div>
      <Header />
      <div className="login-container">
        <h1>Login Page</h1>
        {isAuthenticated ? (
          <h2 style={{ color: "green" }}>You are authenticated.</h2>
        ) : (
          <h2 style={{ color: "red" }}>You are not authenticated.</h2>
        )}
        <div className="login-buttons">
          <button onClick={login}>Login</button>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
