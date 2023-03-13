import React from "react";
import poster from "../../poster.png";
import "./Poster.css";
import { Link } from "react-router-dom";

const Poster = () => {
  return (
    <div className="poster">
      <div className="poster-background">
        <img className="img" src={poster} alt="popcorn" />
        <div className="rectangle" alt="blur"></div>
      </div>
      <div className="poster-contents">
        <p className="poster-quote-h2"> Welcome. </p>
        <p className="poster-quote-h3">
          {" "}
          Share your watch list, discover new movies.{" "}
        </p>
        <Link to="/posts" className="see-newest-button">
          {" "}
          See the newest posts now ---&gt;{" "}
        </Link>
      </div>
      <div className="see-all-features">
        !!!!!Please use a computer to see all features!!!!!
      </div>
    </div>
  );
};

export default Poster;
