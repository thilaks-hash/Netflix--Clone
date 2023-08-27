import { useEffect, useState } from "react";
import MovieCards from "./MovieCards";
import styled from "styled-components";

const token = localStorage.getItem("jwtToken");
const Mylist = () => {
  const [mylist, setMylist] = useState([]);
  const FetchWatchList = async () => {
    try {
      const data = await fetch(
        "https://academics.newtonschool.co/api/v1/ott/watchlist/like",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            projectID: "711pehg5ja32",
            "Content-Type": "application/json",
          },
        }
      );

      const json = await data.json();
      console.log(json.data.shows);
      setMylist(json.data.shows);
    } catch (error) {
      console.error("Error fetching watchlist data:", error);
      return [];
    }
  };
  console.log(mylist);

  useEffect(() => {
    FetchWatchList();
  }, []);
  return (
    <Container>
      <div>
        <h1>MY LIST</h1>
      </div>
      <div className="data">
        {mylist?.map((movie) => {
          return (
            <MovieCards movieData={movie} key={movie._id} isLiked={true} />
          );
        })}
      </div>
    </Container>
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

export default Mylist;
