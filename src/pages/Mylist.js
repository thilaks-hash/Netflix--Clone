import { useEffect, useState } from "react";
const token = localStorage.getItem("jwtToken");
const Mylist = () => {
  const [mylist, setMylist] = useState("");
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
      console.log(json.data);
      setMylist(json.data);
    } catch (error) {
      console.error("Error fetching watchlist data:", error);
      return [];
    }
  };
  useEffect(() => {
    FetchWatchList();
  }, []);

  return (
    <div>
      <div>{mylist}</div>
    </div>
  );
};
export default Mylist;
