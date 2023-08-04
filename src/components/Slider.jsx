import React, { useState, useEffect, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight, HiXMark } from "react-icons/hi2";
import PopupCard from "./PopupCard";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
const MAX_OVERVIEW_LENGTH = 100; // Adjust this value as needed

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMovie, setPopupMovie] = useState(null);

  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos
      .then((resp) => {
        setMovieList(resp.data.results);
      })
      .catch((error) => {});
  };

  const sliderRight = () => {
    const slideWidth = elementRef.current.offsetWidth;
    elementRef.current.scrollBy({
      top: 0,
      left: slideWidth,
      behavior: "smooth",
    });
    setCurrentSlide((prevSlide) =>
      prevSlide < movieList.length - 1 ? prevSlide + 1 : prevSlide
    );
  };

  const sliderLeft = () => {
    const slideWidth = elementRef.current.offsetWidth;
    elementRef.current.scrollBy({
      top: 0,
      left: -slideWidth,
      behavior: "smooth",
    });
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : prevSlide));
  };

  const handleIndicatorClick = (index) => {
    const slideWidth = elementRef.current.offsetWidth;
    elementRef.current.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
    setCurrentSlide(index);
  };

  const handleImageClick = (index) => {
    setShowPopup(true);
    setPopupMovie(movieList[index]);
    // setPopupMovie({ ...movieList[index], price: "$9.99" });
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupMovie(null);
  };

  const calculateAspectRatio = (width, height) => {
    return (height / width) * 100 + "%";
  };
  return (
    <div>
      <HiChevronLeft
        className="hidden md:block absolute top-[300px] left-5 text-4xl text-white cursor-pointer"
        onClick={sliderLeft}
      />

      <HiChevronRight
        className="hidden md:block absolute top-[300px] right-5 text-4xl text-white cursor-pointer"
        onClick={sliderRight}
      />

      <div
        className="flex overflow-x-auto w-full px-16 p-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full h-[350px] md:h-[400px] object-cover mr-5 rounded-xl hover:border-4 border-gray-400 transition-all duration-100 ease-in-out cursor-pointer select-none"
            alt={`Movie ${index}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      <div className="hidden md:flex justify-center flex-wrap -mt-10">
        {movieList.map((item, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 my-1 ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            } cursor-pointer`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>

      {showPopup && popupMovie && (
        <PopupCard movie={popupMovie} onClose={closePopup} />
      )}
    </div>
  );
};

export default Slider;
