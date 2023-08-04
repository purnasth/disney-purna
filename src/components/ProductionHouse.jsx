import React from "react";
import disney from "./../assets/images/disney.png";
import marvel from "./../assets/images/marvel.png";
import nationalG from "./../assets/images/nationalG.png";
import pixar from "./../assets/images/pixar.png";
import starwar from "./../assets/images/starwar.png";

import starwarV from "./../assets/videos/star-wars.mp4";
import disneyV from "./../assets/videos/disney.mp4";
import marvelV from "./../assets/videos/marvel.mp4";
import nationalGeographicV from "./../assets/videos/national-geographic.mp4";
import pixarV from "./../assets/videos/pixar.mp4";

const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-6 p-10 md:px-16 py-2 mt-10">
      {productionHouseList.map((item) => {
        return (
          <div
            key={item.id}
            className="border-2 border-gray-400 rounded-lg overflow-hidden hover:scale-105 sm:hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-2xl shadow-neutral-950 hover:shadow-lg hover:shadow-slate-200 relative"
          >
            <img
              src={item.image}
              alt="production house"
              className="w-full h-auto"
            />
            <video
              autoPlay
              muted
              loop
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-75"
            >
              <source src={item.video} type="video/mp4" />
            </video>
          </div>
        );
      })}
    </div>
  );
};

export default ProductionHouse;
