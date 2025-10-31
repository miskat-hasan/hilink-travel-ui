import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex max-xl:flex-col md:gap-28 gap-20 w-full relative lg:py-20 py-10">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src={"/camp.svg"}
          width={50}
          height={50}
          alt="camp"
          className="-mb-5 w-10 lg:w-[50px]"
        />
        <h1 className="lg:text-[88px] lg:font-[700] lg:leading-[120%] text-[52px] font-[700] leading-[120%]">Putuk Truno Camp Area</h1>
        <p className="text-gray-30 mt-6 regular-16 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, index) => (
              <Image
                src={"/star.svg"}
                width={24}
                height={24}
                alt="star"
                key={index}
              />
            ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1 underline">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-wrap gap-3 w-full">
          <Button
            type="button"
            label="Download App"
            variant="btn_green font-semibold max-sm:w-full"
          />
          <Button
            type="button"
            icon="/play.svg"
            label="How we work?"
            variant="btn_white_text font-semibold max-sm:w-full"
          />
        </div>
      </div>
      <div className="flex flex-1 relative z-20 items-start">
        <div className="bg-green-90 text-white inline-block px-7 py-8 rounded-3xl">
          <div className="flex gap-6 mb-8">
            <div>
              <h4 className="text-gray-20">Location</h4>
              <h3 className="bold-20">Aguas Calientes</h3>
            </div>
            <div>
              <Image
                src={"/close.svg"}
                width={24}
                height={24}
                alt="close icon"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div>
              <h4 className="text-gray-20">Distance</h4>
              <h3 className="bold-20">143.28 mi</h3>
            </div>
            <div>
              <h4 className="text-gray-20">Elevation</h4>
              <h3 className="bold-20">2.040 km</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
