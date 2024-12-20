"use client"
import React from 'react'
import Lottie from 'lottie-react';
import animationData from "../../public/assets/icons/document-error.json";

export default function Error() {
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
