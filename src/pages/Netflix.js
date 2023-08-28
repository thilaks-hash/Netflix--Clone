import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Movies from "./Movies";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <Container>
        <Navbar isScrolled={isScrolled} />
        <Hero>
          <BackgroundImage
            src="https://wallpapercave.com/wp/wp11803424.jpg"
            alt="background"
          />
          <Content>
            <ButtonGroup>
              <Button onClick={() => navigate("/player")}>
                <FaPlay />
                Play
              </Button>
              <Button>
                <AiOutlineInfoCircle />
                More Info
              </Button>
            </ButtonGroup>
          </Content>
        </Hero>
        <Movies />
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: black;
`;

const Hero = styled.div`
  position: relative;
`;

const BackgroundImage = styled.img`
  filter: brightness(60%);
  height: 100vh;
  width: 100vw;
`;

const Content = styled.div`
  position: absolute;
  bottom: 5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin: 5rem;
  gap: 2rem;
`;

const Button = styled.button`
  font-size: 1.4rem;
  gap: 1rem;
  border-radius: 0.2rem;
  padding: 0.5rem;
  padding-left: 2rem;
  padding-right: 2.4rem;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:nth-of-type(2) {
    background-color: rgba(109, 109, 110, 0.7);
    color: white;
    svg {
      font-size: 1.8rem;
    }
  }
`;

export default Netflix;
