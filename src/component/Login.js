import React from "react";
import { useState } from "react";
import "./Login.css";
function Login2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("username:", username);
    console.log("pwd", password);
    alert("your data is save");
  };

  return (
    <form id="loginForm" onSubmit={submit} className="form">
      <div className="login-form h2">
        <div className="login-box">
          <label htmlFor="username" className="input-box label">
            <b>Username:</b>
          </label>
          <input
            type="text"
            className="input-box "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <br></br>

          <label htmlFor="username" className="input-box label">
            <b>password:</b>
          </label>
          <input
            type="password"
            className="input-box "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br></br>
          <br></br>
          <button type="submit" className="btn">
            login
          </button>
        </div>{" "}
      </div>{" "}
    </form>
  );
}
export default Login2;
