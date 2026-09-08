import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    setError("");
    setIsSubmitting(true);

    axios
      .post("http://localhost:8080/login", { username, password })
      .then((res) => {
        setIsSubmitting(false);
        window.location.href = `http://localhost:5174/dashboard?token=${res.data.token}&username=${res.data.username}`;
      })
      .catch((err) => {
        setIsSubmitting(false);
        setError(err.response?.data?.error || "Login failed");
      });
  };

  return (
    <div className="container py-5" style={{ maxWidth: "400px" }}>
      <h1 className="mb-4">Login</h1>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ height: "50px", fontSize: "16px" }}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ height: "50px", fontSize: "16px" }}
      />

      {error && (
        <p className="text-danger mb-3" style={{ fontSize: "14px" }}>
          {error}
        </p>
      )}

      <button
        className="btn btn-primary"
        onClick={handleLogin}
        disabled={isSubmitting}
        style={{
          width: "100%",
          height: "50px",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>

      <p className="mt-3 text-center" style={{ fontSize: "14px" }}>
        Don't have an account?{" "}
        <a href="/Signup" className="text-primary">
          Sign up
        </a>
      </p>
    </div>
  );
}

export default Login;