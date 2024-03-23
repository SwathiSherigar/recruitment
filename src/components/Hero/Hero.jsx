import React from 'react';
export default function Hero() {
  return (
    <>
      <div className="container relative">
        <img
          src="https://www.sitmng.ac.in/assets/img/header-img.png"
          alt="Srinivas Institute of Technology College Photo"
          className="w-full h-auto md:h-96 md:w-11/12 md:mx-auto"
        />
        <div className="absolute top-0 left-0 w-full  h-full bg-black opacity-50 flex justify-center items-center">
          <h1 className="text-gray-100 text-4xl md:text-6xl font-bold">Recruitment</h1>
        </div>
      </div>
    </>
  );
}
