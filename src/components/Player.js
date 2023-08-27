import React from "react";
import styled from "styled-components";

import { useLocation } from "react-router-dom"; // Import useLocation hook

const Player = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const videoUrl = searchParams.get("videoUrl");

  return (
    <Container>
      <div>
        <video controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Container>
  );
};

export default Player;

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
