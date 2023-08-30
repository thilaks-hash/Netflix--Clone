import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import React from "react";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <div className="head">
        <div className="logo">
          <img src={logo} alt="netflix logo" />
        </div>
        <button onClick={() => navigate(props.login ? "/" : "/signup")}>
          {props.login ? "Log in" : "Sign up"}
        </button>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  .logo {
    img {
      height: 5rem;
    }
  }

  button {
    padding: 10px 20px;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }

  .head {
    display: flex;
    justify-content: space-between; /* Use space-between for better spacing */
    align-items: center; /* Vertically center the content */
    padding: 10px;
    margin: 10px;
    left: 10px;
  }

  /* Media Query for smaller screens */
  @media screen and (max-width: 768px) {
    .head {
      flex-direction: column; /* Stack items vertically */
      align-items: center;
    }

    .logo {
      img {
        height: 4rem; /* Adjust the logo size */
      }
    }

    button {
      margin-top: 10px; /* Add some spacing between logo and button */
    }
  }
`;
