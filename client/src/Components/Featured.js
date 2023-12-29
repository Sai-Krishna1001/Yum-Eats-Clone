import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import pizza from "../images/pizza.png";
import burger from "../images/burger.png";
import meals from "../images/meals.png";
const Featured = () => {
  const sliders = [
    {
      image: burger,
    },
    {
      image: pizza,
    },
    {
      image: meals,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const moveToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[1520px] h-[400px] w-full px-4 py-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].image})` }}
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-orange-700 text-white cursor-pointer hover:bg-orange-500 hover:scale-150 transition-all duration-150">
        <BsChevronCompactLeft size={25} onClick={prevSlider} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-orange-700 text-white cursor-pointer hover:bg-orange-500 hover:scale-150 transition-all duration-150">
        <BsChevronCompactRight size={25} onClick={nextSlider} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((sliderItems, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => moveToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled className="hover:text-orange-500 hover:scale-150 transition-all duration-150" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
