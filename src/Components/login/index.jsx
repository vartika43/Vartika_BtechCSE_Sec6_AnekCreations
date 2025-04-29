import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="login-background">
      <nav className="navbar">
  <Link to="/" className="logo-link" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
    <img
      className="logo_image_login"
      src="/images/anek logo.jpg"
      alt="logo"
      width="50"
      height="50"
    />
    <span style={{ marginLeft: '10px', color: '#6a1b9a', fontWeight: 'bold', fontSize: '1.5rem' }}>
      anek creations
    </span>
  </Link>
</nav>


      <div className="form-wrapper">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Link to="/help" className="help-link">
              Need help?
            </Link>
          </div>
        </form>

        <p className="signup-text">
          New user? <Link to="/signup">Sign up now</Link>
        </p>

        <small className="recaptcha-note">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <Link to="/learn-more">Learn more.</Link>
        </small>
      </div>
    </div>
  );
};
export default Login;
