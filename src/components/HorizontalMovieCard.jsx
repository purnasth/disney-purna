import React, { useState } from "react";
import PopupCard from "./PopupCard";
import HandlePlayTrailer from "./HandlePlayTrailer";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HorizontalMovieCard = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const toggleDetails = () => {
    setSelectedMovie(movie);
    setShowDetails(!showDetails);
  };

  const closePopup = () => {
    setShowDetails(false);
    setSelectedMovie(null);
  };

  return (
    <div className="relative">
      <div
        className="w-28 md:w-64 hover:scale-110 transition-all duration-150 ease-in"
        onClick={toggleDetails}
      >
        <img
          src={IMAGE_BASE_URL + movie.backdrop_path}
          alt={`Movie ${movie.title}`}
          className="rounded-xl hover:border-4 border-gray-200 cursor-pointer hover:scale-105 transition-all duration-150 ease-in shadow-2xl shadow-neutral-950 hover:shadow-lg hover:shadow-slate-200"
        />
        <h2
          className=" text-white
        mt-2"
        >
          <span className="hidden md:block">{movie.title}</span>
        </h2>
      </div>

      {showDetails && selectedMovie === movie && (
        <PopupCard
          movie={movie}
          onClose={closePopup}
          additionalContent={<HandlePlayTrailer movie={movie} />}
        />
      )}
    </div>
  );
};

export default HorizontalMovieCard;
