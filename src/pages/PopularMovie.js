import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import MovieCards from "./MovieCards";

const PopularMovie = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [popularMovie, setPopularMovie] = useState([]);

  const FetchPopularMovie = async () => {
    const data = await fetch(
      'https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "web series"}',
      {
        headers: {
          projectId: "711pehg5ja32",
        },
      }
    );
    const json = await data.json();
    console.log(json.data);
    setPopularMovie(json.data);
  };

  useEffect(() => {
    FetchPopularMovie();
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
          {popularMovie.map((movie) => {
            return <MovieCards movieData={movie} key={movie._id} />;
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
export default PopularMovie;
