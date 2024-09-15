import Image from 'next/image'
import React from 'react'
import Underline from '../shared-component/underline';

export default function AboutMe() {
  return (
    <div className="py-[2%] primary-width ">
      <div className="flex flex-col-reverse md:flex-row items-center gap-5 ">
        <div className="relative">
          <div className="w-60 sm:w-60 md:w-96">
            {/* Image */}
            <Image
              src={"/assets/images/aboutme.jpg"}
              width={350}
              height={350}
              alt="About me"
              className="rounded-lg w-full h-auto shadow-2xl"
            />
          <div className="absolute top-10 left-10 w-full h-full border-2 dark:border border-zinc-200  rounded-br-3xl" style={{zIndex:-1}}></div>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:pl-10 ml-auto space-y-5">
          {/* Text */}
          <div>
            <h1
              className="md:text-2xl text-xl  dark:text-white"
              style={{ fontWeight: 900 }}
            >
              About Me
            </h1>
            <Underline />
          </div>
          <p className="dark:text-white">
            For instance, whenever I go back to the guest house during the
            morning to copy out the contract, these gentlemen are always still
            sitting there eating their breakfasts. I ought to just try that with
            my boss; I'd get kicked out on the spot. <br /> But who knows, maybe
            that would be the best thing for me. He'd fall right off his desk!{" "}
            <br /> And it's a funny sort of business to be sitting up there at
            your desk, talking down at your subordinates. I ought to just try
            that witht my boss; I'd get kicked out on the spot. But who knows,
            maybe that would be the best thing for me. He'd fall right off his
            desk! And it's a funny sort of business to be sitting up there at
            your desk, talking down at your subordinates.
          </p>
          <div>
            <h6 className="font-bold dark:text-white">Share:</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
