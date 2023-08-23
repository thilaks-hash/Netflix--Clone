import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import MovieCards from "./MovieCards";

const TvShows = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [TvShows, setTvShows] = useState([]);

  const FetchTvShows = async () => {
    const data = await fetch(
      'https://academics.newtonschool.co/api/v1/ott/show?filter={"type" :"tv show"}',
      {
        headers: {
          projectId: "711pehg5ja32",
        },
      }
    );
    const json = await data.json();
    console.log(json.data);
    setTvShows(json.data);
  };

  useEffect(() => {
    FetchTvShows();
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <Container>
        <div className="data">
          {TvShows.map((movie, index) => {
            return (
              <MovieCards movieData={movie} index={index} key={movie.id} />
            );
          })}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  .data {
    display: flex;
    flex-wrap: wrap;
  }

  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
export default TvShows;
