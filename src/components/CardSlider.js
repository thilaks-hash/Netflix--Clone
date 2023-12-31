import React, { useRef } from "react";
import styled from "styled-components";

import MovieCards from "../pages/MovieCards";
export default React.memo(function CardSlider({ data, title }) {
  const listRef = useRef();

  return (
    <Container className="flex column">
      <h1>{title}</h1>
      <div className="wrapper">
        <div className="slider flex" ref={listRef}>
          {data.map((movie) => {
            return (
              <MovieCards movieData={movie} key={movie._id} isLiked={false} />
            );
          })}
        </div>
      </div>
    </Container>
  );
});
const Container = styled.div`
  gap: 1rem;
  position: relative;
  padding: 2rem 0;
  h1 {
    margin-left: 50px;
  }
  .wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    .slider {
      width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 50px;
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 0;
      bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2rem;
      }
    }
  }
  .wrapper::-webkit-scrollbar {
    display: none;
  }
`;
