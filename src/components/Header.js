import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import React from "react";
export default function Header(props) {
  const navigate = useNavigate();
  return (
    <StyledHeader className=" head">
      <div className="logo">
        <img src={logo} alt="netflix logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log in" : "Sign In"}
      </button>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
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
`;
