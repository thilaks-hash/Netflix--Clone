import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Slider from "../components/Slider";

const Movies = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [movies, setMovies] = useState([]);

  const FetchMovies = async () => {
    const data = await fetch(
      "https://academics.newtonschool.co/api/v1/ott/show",
      {
        headers: {
          projectId: "711pehg5ja32",
        },
      }
    );
    const json = await data.json();
    console.log(json.data);
    setMovies(json.data);
  };

  useEffect(() => {
    FetchMovies();
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
        <Slider movies={movies} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
export default Movies;
