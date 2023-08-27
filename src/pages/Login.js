import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const projectId = "711pehg5ja32";

  let headersList = {
    projectId: projectId,
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: "https://academics.newtonschool.co/api/v1/user/login",
    method: "POST",
    headers: headersList,
  };

  const login = async () => {
    try {
      let response = await axios.request(reqOptions);
      console.log(response);
      if (response.status === 200) {
        console.log(response);

        localStorage.setItem("jwtToken", response.data.token);
        localStorage.setItem("userName", response.data.name);
        navigate("/");
      }
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      console.error(error, errMsg);
    }
  };

  const handleLogin = () => {
    const bodyContent = JSON.stringify({
      email: email,
      password: password,
      appType: "ott",
    });

    reqOptions.data = bodyContent;

    login();
  };

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login to your account</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

export default Login;
