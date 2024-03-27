// frontend/src/App.jsx

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [usernameSignup, setUsernameSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          username: usernameLogin,
          password: passwordLogin,
        }
      );
      localStorage.setItem("token", response.data.token);
      alert("Login successful");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        {
          username: usernameSignup,
          password: passwordSignup,
        }
      );
      alert("Signup successful");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <br />
        <input
          type="text"
          value={usernameLogin}
          onChange={(e) => setUsernameLogin(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          value={passwordLogin}
          onChange={(e) => setPasswordLogin(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>

      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <label>Username:</label>
        <br />
        <input
          type="text"
          value={usernameSignup}
          onChange={(e) => setUsernameSignup(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          value={passwordSignup}
          onChange={(e) => setPasswordSignup(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default App;
