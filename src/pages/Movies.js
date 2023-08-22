import { useState, useEffect } from "react";
import MovieCards from "./MovieCard";

const Movies = () => {
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
  return (
    <div className="flex f-wrap ">
      {movies.map((movie) => (
        <MovieCards movieData={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Movies;
