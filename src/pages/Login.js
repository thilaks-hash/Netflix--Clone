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
        <Headers>
          <Header />
        </Headers>
        <FormContainer>
          <Form>
            <Title>Login</Title>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Login to your account</Button>
          </Form>
        </FormContainer>
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
  padding: 0.5rem 1rem;
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

export default Login;
