import React, { useState } from "react";
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

        alert("Successfully Signed Up");

        navigate("/");
      }
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      console.error(error, errMsg);
      if (errMsg === "User already exists") {
        alert("User already exists");
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

    reqOptions.data = bodyContent;

    await login();
  };

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Headers>
          <Header login />{" "}
        </Headers>

        <FormContainer>
          <Form>
            <Title>Sign Up</Title>
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>

            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="btn" onClick={handleSignUp}>
              Sign up
            </Button>
          </Form>
        </FormContainer>
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
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const FormContainer = styled.div`
  background-color: #000000b0;
  width: 80%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 0.2rem;
  color: white;
`;
const Headers = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  color: white;
  padding: 1rem;
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 0.2rem;
  font-weight: bolder;
  font-size: 1rem;
`;

export default Signup;
