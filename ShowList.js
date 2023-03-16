import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ShowList.css";

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get("https://api.tvmaze.com/shows").then((response) => {
      setShows(response.data);
    });
  }, []);

  function limitText(text, limit) {
    const words = text.split(" ");
    const slicedWords = words.slice(0, limit);
    return slicedWords.join(" ") + (words.length > limit ? "..." : "");
  }

  return (
    <div className="container">
      <h1 className="title">TV Shows</h1>
      <div className="show-list">
        {shows.map((show) => (
          <div key={show.id} className="show-card">
            <img
              src={show.image.medium}
              alt={show.name}
              className="show-image"
            />
            <h2 className="show-name">{show.name}</h2>
            <p className="show-summary">{limitText(show.summary, 35)}</p>
            <Link to={`/shows/${show.id}`} className="btn btn-primary">
              View Summary
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
