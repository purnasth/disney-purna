import React, { useState } from "react";
import PopupCard from "./PopupCard";
import HandlePlayTrailer from "./HandlePlayTrailer";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

const MovieCard = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const closePopup = () => {
    setShowDetails(false);
  };

  return (
    <div className="relative">
      <div className="w-28 md:w-52 pb-4 md:pb-8">
        <img
          src={IMAGE_BASE_URL + movie.poster_path}
          alt={`Movie ${movie.title}`}
          className="w-full h-full rounded-lg object-cover hover:border-4 border-gray-200 cursor-pointer hover:scale-110 transition-all duration-150 ease-in shadow-2xl shadow-neutral-950 hover:shadow-lg hover:shadow-slate-200"
          onClick={toggleDetails}
        />
      </div>

      {showDetails && (
        <PopupCard
          movie={movie}
          onClose={closePopup}
          additionalContent={<HandlePlayTrailer movie={movie} />}
        />
      )}
    </div>
  );
};

export default MovieCard;
