import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
import { projectid } from "../utils/constants";

export default function Slider() {
  const [pages, setPages] = useState([]);

  const fetchMovies = async (page, limit) => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ott/show?page=${page}&limit=${limit}`,
        {
          headers: {
            projectId: projectid,
          },
        }
      );
      if (response.ok) {
        const json = await response.json();
        return json.data;
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchAllMovies = async () => {
      const data = await Promise.all([
        fetchMovies(1, 10),
        fetchMovies(2, 20),
        fetchMovies(3, 30),
        fetchMovies(4, 40),
        fetchMovies(5, 50),
        fetchMovies(6, 60),
      ]);
      setPages(data);
    };

    fetchAllMovies();
  }, []);

  const sliderTitles = [
    "Trending Now",
    "New Releases",
    "Blockbuster Movies",
    "Popular on Netflix",
    "Action Movies",
    "Epics",
  ];

  return (
    <Container>
      {pages.map((data, index) => (
        <CardSlider key={index} data={data} title={sliderTitles[index]} />
      ))}
    </Container>
  );
}

const Container = styled.div``;
