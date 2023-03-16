import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./ShowSummary.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ShowSummary() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`).then((response) => {
      setShow(response.data);
    });
  }, [id]);

  const summary =
    show && show.summary && show.summary.split(" ").splice(0, 300).join(" ");

  return (
    <div className="container">
      {show && (
        <>
          <div className="row">
            <div className="col-md-3">
              <img
                src={show.image.medium}
                alt={show.name}
                className="img-fluid show-image"
              />
            </div>
            <div className="col-md-9">
              <h1 className="show-name">{show.name}</h1>
              <div
                className="show-summary "
                dangerouslySetInnerHTML={{ __html: summary }}
              ></div>
              <Link to={`/book/${show.id}`} className="btn btn-primary">
                Book Ticket
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ShowSummary;
