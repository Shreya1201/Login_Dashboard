import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../Picture/Logo.png";
import { useNavigate } from "react-router-dom";

const LoginBackground = styled.div`
  background: #222222;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginIn = styled.div`
  width: 400px;
  border-radius: 15px;
  background: #141414;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const LogoName = styled.div`
  img {
    width: 70%;
    padding: 20px;
  }
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 70%;
      margin: 10px auto;
      border-radius: 5px;
      padding: 10px;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    button {
      width: 70%;
      margin: 20px auto;
      border: none;
      border-radius: 8px;
      background-color: #71be58;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s;
      padding: 10px;

      &:hover {
        background-color: #417621;
      }
    }
  }

  a {
    text-align: center;
    color: #8d8c8c;
    margin: 20px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorAlert = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  padding: 15px;
  margin-top: 10px;
  border: 2px solid #ff1a1a;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    window.location.href =
      "mailto:support@smartserv.io?subject=Password%20Reset";
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Invalid password format. Password must contain an uppercase letter, a number, and only '@' as a special character."
      );
      return;
    }

    if (password === "SmartServTest@123") {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <LoginBackground>
      <LoginIn>
        <LogoName>
          <img src={Logo} alt="Logo" />
        </LogoName>
        <Form>
          <form onSubmit={handleLogin} id="form1">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" form="form1" value="Submit">
              Login
            </button>
          </form>
          <a href="#" onClick={handleForgotPassword}>
            Forgot your password?
          </a>
          {error && <ErrorAlert>{error}</ErrorAlert>}
        </Form>
      </LoginIn>
    </LoginBackground>
  );
}

export default Login;
