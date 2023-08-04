import React from "react";
import { HiPlay } from "react-icons/hi";

const HandlePlayTrailer = ({ onPlayTrailer }) => {
  return (
    <button
      className="flex items-center mt-4 px-4 py-2 bg-[#01b4e4] text-white rounded-md border-2 border-[#01b4e4] hover:bg-white hover:text-[#01b4e4] hover:shadow-lg transition-all duration-150 ease-in"
      onClick={onPlayTrailer}
    >
      <HiPlay className="mr-2" />
      Play Trailer
    </button>
  );
};

export default HandlePlayTrailer;
