import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
import { projectid } from "../utils/constants";
export default function Slider() {
  const [page, setPage] = useState([]);
  const [page1, setPage1] = useState([]);
  const [page2, setPage2] = useState([]);
  const [page3, setPage3] = useState([]);
  const [page4, setPage4] = useState([]);
  const [page5, setPage5] = useState([]);

  const FetchMovies = async () => {
    const data1 = await fetch(
      "https://academics.newtonschool.co/api/v1/ott/show?page=1&limit=10",
      {
        headers: {
          projectId: projectid,
        },
      }
    );
    const json = await data1.json();
    setPage(json.data);
  };
  const FetchMovies1 = async () => {
    const data1 = await fetch(
      "https://academics.newtonschool.co/api/v1/ott/show?page=2&limit=20",
      {
        headers: {
          projectId: projectid,
        },
      }
    );
    const json = await data1.json();
    setPage1(json.data);
  };
  const FetchMovies2 = async () => {
    const data1 = await fetch(
      "https://academics.newtonschool.co/api/v1/ott/show?page=3&limit=30",
      {
        headers: {
          projectId: projectid,
        },
      }
    );
    const json = await data1.json();
    setPage2(json.data);
  };
  const FetchMovies3 = async () => {
    const data1 = await fetch(
      "https://academics.newtonschool.co/api/v1/ott/show?page=4&limit=40",
      {
        headers: {
          projectId: projectid,
        },
      }
    );
    const json = await data1.json();
    setPage3(json.data);
  };
  const FetchMovies4 = async () => {
    const data1 = await fetch(
      "https://academics.newtonschool.co/api/v1/ott/show?page=5&limit=50",
      {
        headers: {
          projectId: projectid,
        },
      }
    );
    const json = await data1.json();
    setPage4(json.data);
  };
  const FetchMovies5 = async () => {
    const data1 = await fetch(
      "https://academics.newtonschool.co/api/v1/ott/show?page=6&limit=60",
      {
        headers: {
          projectId: projectid,
        },
      }
    );
    const json = await data1.json();
    setPage5(json.data);
  };

  useEffect(() => {
    FetchMovies();
    FetchMovies1();
    FetchMovies2();
    FetchMovies3();
    FetchMovies4();
    FetchMovies5();
  }, []);

  return (
    <Container>
      <CardSlider data={page} title="Trending Now" />
      <CardSlider data={page1} title="New Releases" />
      <CardSlider data={page2} title="Blockbuster Movies" />
      <CardSlider data={page3} title="Popular on Netflix" />
      <CardSlider data={page4} title="Action Movies" />
      <CardSlider data={page5} title="Epics" />
    </Container>
  );
}

const Container = styled.div``;
