"use client"
import React from 'react'
import Lottie from 'lottie-react';
import animationData from "../../public/assets/icons/document-error.json";
import Button from './components/shared-component/button';
import { useRouter } from 'next/navigation';
export default function NotFoundPage() {
   const router = useRouter();

  const goBack = () => {
    router.back(); // This will navigate back to the previous page
  };
  return (
    <div className='mx-auto w-full h-screen bg-white'>
      <div className='w-[20%] h-[20%]  mx-auto flex flex-col items-center space-y-10'>
      <Lottie 
      animationData={animationData}
	    loop= {true}
        />
        <h1 className='text-black text-4xl font-bold'>Error 404</h1>
        <Button onClick={goBack} text={'Go Back'}/>
    </div>
    </div>
  )
}
