import React, { useEffect, useState } from "react";
import { useSearch } from "../utils/SearchContext";
import MovieCards from "../pages/MovieCards";
import styled from "styled-components";

const SearchResults = () => {
  const { searchQuery } = useSearch();
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchSearch();
  }, []);
  const fetchSearch = async () => {
    const data = await fetch(
      `https://academics.newtonschool.co/api/v1/ott/show?filter={"keywords" : "${searchQuery}"}`,
      {
        headers: {
          projectId: "711pehg5ja32",
        },
      }
    );
    const json = await data.json();
    console.log(json.data);
    setResults(json.data);
  };
  return (
    <>
      <Container>
        <div>
          <h1>{searchQuery}</h1>
        </div>
        <div className="data">
          {results.map((movie, index) => {
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
export default SearchResults;
