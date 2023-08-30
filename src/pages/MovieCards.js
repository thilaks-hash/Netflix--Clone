import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

import video from "../assets/video.mp4";
const MovieCards = (props) => {
  const navigate = useNavigate();

  const { movieData } = props;
  const { thumbnail, keywords, title, _id, video_url } = movieData;
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const token = localStorage.getItem("jwtToken");

  const addToList = async () => {
    if (liked === false) {
      setLiked(true);
    } else {
      setLiked(false);
    }
    const showId = _id;
    const requestBody = {
      showId: showId,
    };
    console.log(requestBody);

    const data = await fetch(
      " https://academics.newtonschool.co/api/v1/ott/watchlist/like",
      {
        method: "PATCH",
        headers: {
          projectId: "711pehg5ja32",
          Authorization: `Bearer ${token}`,

          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    const json = await data.json();
    console.log(json.data);
  };

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={thumbnail}
        alt="movie"
        onClick={() => navigate("/moviecontent/" + _id)}
      />
      {isHovered && (
        <div className="hover" key={_id}>
          <div className="image-video-container">
            <img
              src={thumbnail}
              alt="movie"
              onClick={() => navigate("/moviecontent/" + _id)}
            />
            <video
              src={video}
              autoPlay={true}
              loop
              muted
              onClick={() => navigate("/player")}
            />
          </div>
          <div className="info-container flex column">
            <h3
              className="name"
              onClick={() => navigate("/moviecontent/" + _id)}
            >
              {title}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <Link to={`/player?videoUrl=${encodeURIComponent(video_url)}`}>
                  <IoPlayCircleSharp title="Play" className="play-icon" />
                </Link>
                <RiThumbUpFill title="Like" />
                <RiThumbDownFill title="Dislike" />

                {liked ? (
                  <BsCheck title="Remove from List" onClick={addToList} />
                ) : (
                  <AiOutlinePlus title="Add to my list" onClick={addToList} />
                )}
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genres flex">
              <ul className="flex">
                {keywords.map((genre) => (
                  <li>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 230px;
  width: 230px;
  height: 200px;
  cursor: pointer;
  padding: 10px;
  position: relative;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    margin-buttom: 10px;
    z-index: 89;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -10vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-container {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      video {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 5;
        position: absolute;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      ul {
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
  .play-icon {
    color: #999999;
  }
`;
export default MovieCards;
