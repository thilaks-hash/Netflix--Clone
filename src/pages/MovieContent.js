import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
const MovieContent = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState("");

  useEffect(() => {
    fetchContent();
  }, []);
  const fetchContent = async () => {
    const data = await fetch(
      `https://academics.newtonschool.co/api/v1/ott/show/${movieId}`,
      {
        headers: {
          projectId: "711pehg5ja32",
        },
      }
    );
    const json = await data.json();
    setMovieInfo(json.data);
  };
  const { thumbnail, title, video_url, cast, description, keywords } =
    movieInfo;

  return (
    <div>
      <div className="content">
        <img className="thumbnail" src={thumbnail} alt="movie" />
        <div className="cast">
          <h1 className="title">{title}</h1>
          <h4 className="casts">Cast: {cast}</h4>
          <h4 className="des">Description: {description}</h4>
          <h4 className="genres">Genres:{keywords}</h4>
        </div>
      </div>

      <Link
        to={`/player?videoUrl=${encodeURIComponent(video_url)}`}
        className="play-button"
      >
        <FaPlay className="play-icon" />
        Play
      </Link>
    </div>
  );
};
export default MovieContent;
