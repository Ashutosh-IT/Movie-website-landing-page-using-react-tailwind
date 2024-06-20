import React, { useState } from "react";
import { BANNER_IMG_URL } from "../utils/constant";
import Header from "./Header";
import MovieList from "./MovieList";

const HeroSection = () => {
  const [bannerImage, setBannerImage] = useState(BANNER_IMG_URL);

  return (
    <div>
      <div className="absolute z-[-1] m-auto">
        <img
          className="h-screen object-cover w-screen"
          src={bannerImage}
          alt="banner"
        />
      </div>
      <div className="h-48 absolute z-[-1] w-screen bg-gradient-to-b from-gray-900"></div>
      <div className="h-48 absolute bottom-0 z-[-1] w-screen mb-[-20px] bg-gradient-to-t from-gray-900"></div>
      <Header />
      <div className="p-10 mt-10">
        <p className="text-5xl font-extrabold text-white">
          RAYA AND THE<br></br>LAST DRAGON
        </p>
        <p className="text-white font-thin mt-6">A Disney Original Film</p>
        <p
          className="mt-5 bg-purple-500 hover:scale-125
         text-white p-2 px-10 rounded-full w-[140px] text-center
         cursor-pointer hover:font-bold  transition-all duration-300"
        >
          Play
        </p>
      </div>
      <MovieList/>
    </div>
  );
};

export default HeroSection;
