import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
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
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-control">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="form-control">
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <div className="form-help">
            <Link to="/help" className="help-link">
              Need help?
            </Link>
          </div>
        </form>

        <p className="signup-text">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>

        <small className="recaptcha-note">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <Link to="/learn-more">Learn more.</Link>
        </small>
      </div>
    </div>
  );
};

export default Signup;
