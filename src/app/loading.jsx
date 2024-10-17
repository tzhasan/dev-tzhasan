"use client"
import React from 'react'
import Lottie from 'lottie-react';
import animationData from "../../public/assets/icons/CircleLoader.json";

export default function Loading() {
   
  return (
    <div className='mx-auto w-full h-screen bg-primary_black'>
      <div className='w-[20%] h-[20%]  mx-auto'>
      <Lottie 
      animationData={animationData}
	    loop= {true}
      />
    </div>
    </div>
  )
}
