"use client"
import React from 'react'
import Lottie from 'lottie-react';
import animationData from "../../public/assets/icons/CircleLoader.json";

export default function Loading() {
   
  return (
    <div className="flex items-center justify-center w-full h-screen bg-primary_black">
      <div className="md:w-[20%] md:h-[20%] w-[40%] h-[40%] -mt-64">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
}
