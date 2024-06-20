import React, { useState } from "react";
import { VIDEO_LIST } from "../utils/constant";

const MovieList = () => {
  const [videoList, setVideoList] = useState(VIDEO_LIST);
  return (
    <div className="mt-20">
      <p className=" px-5 text-white text-[20px] font-bold">New Releases</p>
      <div
        className="w-full py-5  px-5 overflow-x-scroll 
    scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {videoList.map((item) => (
          <div className="inline-block m-2 md:3">
            <img
              className="w-[130px] h-[200px] rounded-2xl object-cover  md:w-[160px] md:h-[240px] transition-all ease-in-out duration-500 cursor-pointer hover:scale-125"
              src={item.image}
              key={item.id}
              alt="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
