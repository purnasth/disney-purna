import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HorizontalMovieCard from "./HorizontalMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);

  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = () => {
    const slideWidth = elementRef.current.offsetWidth;
    elementRef.current.scrollBy({
      top: 0,
      left: slideWidth,
      behavior: "smooth",
    });
  };

  const sliderLeft = () => {
    const slideWidth = elementRef.current.offsetWidth;
    elementRef.current.scrollBy({
      top: 0,
      left: -slideWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div ref={elementRef} className="flex gap-6 overflow-x-auto scrollbar-hide cursor-pointer py-5 px-3">
        {movieList.map((item, index) => (
          <React.Fragment key={index}>
            {index_ % 3 === 0 ? (
              <HorizontalMovieCard movie={item} />
            ) : (
              <MovieCard key={index} movie={item} />
            )}
          </React.Fragment>
        ))}
      </div>
      <HiChevronLeft
        className={`hidden md:block absolute top-[150px] -left-10 text-4xl text-white cursor-pointer ${
          index_ % 3 === 0 ? "top-[80px]" : "top-[150px]"
        } `}
        onClick={sliderLeft}
      />

      <HiChevronRight
        className={`hidden md:block absolute top-[150px] -right-10 text-4xl text-white cursor-pointer ${
          index_ % 3 === 0 ? "top-[80px]" : "top-[150px]"
        } `}
        onClick={sliderRight}
      />
    </div>
  );
};

export default MovieList;
