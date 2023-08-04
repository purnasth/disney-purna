// import React from "react";
// import { HiX } from "react-icons/hi";

// const PopupCard = ({ movie, onClose }) => {
//   return (
//     <div
//       className="fixed bottom-0 left-0 right-0 top-0 bg-black bg-opacity-70 p-4 z-50 flex items-center justify-center"
//       onClick={onClose}
//     >
//       <button
//         className="bg-[--tmdbLightBlue] text-white text-2xl absolute top-5 right-5 cursor-pointer p-2"
//         onClick={onClose}
//       >
//         <HiX />
//       </button>
//       <div className="bg-white p-4 rounded-md shadow-lg flex flex-col md:flex-row w-3/4 md:h-[50%] items-center justify-center">
//         <div className="flex items-center justify-center pb-4 md:pb-0 rounded-full">
//           <iframe
//             src="https://www.youtube.com/embed/fvjc2ihgeeI"
//             title="|Ma sansar| |Lakhau Hajarau| |Mari jau| |Vanna aaudaina| by Purna Shrestha |Official Cover|"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </div>
//         <div className="w-full md:w-1/2 ml-4">
//           <h3 className="font-bold text-lg md:text-2xl pb-4 text-[--tmdbLightBlue]">
//             {movie.title}
//           </h3>
//           <p className="line-clamp-4">{movie.overview}</p>
//           <p>
//             <span className="text-[--tmdbLightBlue]">Genre:</span> {movie.genre}
//           </p>
//           <p>
//             <span className="text-[--tmdbLightBlue]">Director:</span> {movie.director}
//           </p>
//           {/* <p><span className="text-[--tmdbLightBlue]">Cast:</span> {movie.cast.join(", ")}</p> */}
//           <p>
//             <span className="text-[--tmdbLightBlue]">Release Date:</span>{" "}
//             {movie.releaseDate}
//           </p>
//           <p>
//             <span className="text-[--tmdbLightBlue]">Duration:</span> {movie.duration}{" "}
//             mins
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopupCard;

import React from "react";
import { HiX } from "react-icons/hi";
import HandlePlayTrailer from "./HandlePlayTrailer";

const PopupCard = ({ movie, onClose }) => {
  const handlePlayTrailer = () => {
    const trailerKey = movie?.video?.key;
    if (trailerKey) {
      const youtubeUrl = `https://www.youtube.com/watch?v=${trailerKey}`;
      window.open(youtubeUrl, "_blank");
    } else {
      console.log("No trailer available for this movie.");
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0 bg-black bg-opacity-70 p-4 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="bg-[--tmdbLightBlue] text-white text-2xl absolute top-5 right-5 cursor-pointer p-2"
        onClick={onClose}
      >
        <HiX />
      </button>
      <div className="bg-white p-4 rounded-md shadow-lg flex flex-col md:flex-row w-3/4  min-h-[45%] items-center justify-center">
        <div className="w-full">
          {movie?.video?.key ? (
            <iframe
              width="100%"
              height="300"
              src={`https://www.youtube.com/embed/${movie?.video?.key}`}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <p>No trailer available for this movie.</p>
          )}
        </div>
        <div className="w-full ml-4">
          <h3 className="font-bold text-lg md:text-2xl pb-4 text-[--tmdbLightBlue]">
            {movie.title}
          </h3>
          <p className="line-clamp-4">{movie.overview}</p>
          <p>
            <span className="text-[--tmdbLightBlue]">Genre:</span> {movie.genre}
          </p>
          <p>
            <span className="text-[--tmdbLightBlue]">Director:</span>{" "}
            {movie.director}
          </p>
          {/* <p><span className="text-[--tmdbLightBlue]">Cast:</span> {movie.cast.join(", ")}</p> */}
          <p>
            <span className="text-[--tmdbLightBlue]">Release Date:</span>{" "}
            {movie.releaseDate}
          </p>
          <p>
            <span className="text-[--tmdbLightBlue]">Duration:</span>{" "}
            {movie.duration} mins
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
