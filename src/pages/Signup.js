import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const projectId = "711pehg5ja32";

  let headersList = {
    projectId: projectId,
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: "https://academics.newtonschool.co/api/v1/user/signup",
    method: "POST",
    headers: headersList,
  };

  const login = async () => {
    try {
      let response = await axios.request(reqOptions);
      console.log(response);
      if (response.status === 201) {
        console.log(response);

        alert("SuccessFully SignedUp");

        navigate("/");
      }
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      console.error(error, errMsg);
      if (errMsg === "User already exists") {
        alert("User already exist");
      } else {
        console.log("error");
      }
    }
  };
  const handleSignUp = async () => {
    const bodyContent = JSON.stringify({
      name: username,
      email: email,
      password: password,
      appType: "ott",
    });

    reqOptions.data = bodyContent; // Update the data in the request options

    await login();
  };

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSignUp}>Sign up</button>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
    position: relative;
    .content {
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      height: 100vh;
      width:100vw;
      display: grid;
      grid-template-rows: 15vh 85vh;
      .body {
        gap: 1rem;
        .text {
          gap: 1rem;
          text-align: center;
          color:white;
          font-size: 2rem;
          h1 {
            padding: 0 25rem;
          }
        }
        .form {
          display: grid;
          grid-template-columns: ${({ showPassword }) =>
            showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
          width: 60%;
          input {
            color: black;
            border: none;
            padding: 1.5rem;
            font-size: 1.2rem;
            border: 1px solid black;
            &:focus {
              outline: none;
            }
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            font-weight: bolder;
            font-size: 1.05rem;
          }
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
`;

export default Signup;
