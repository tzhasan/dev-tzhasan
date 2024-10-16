import { themeProvider } from '@/app/provider/themeProvider';
import Image from 'next/image';
import React, { useContext } from 'react'
import { data } from '../../../../public/data';

export default function Banner({profile}) {
  const { isChecked, setisChecked } = useContext(themeProvider);
  return (
    <div className="bg-primary_black pt-[75px] " id="banner">
      <div className="primary-width flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="md:space-y-3 space-y-1 mr-auto md:mx-auto">
          <h1
            className="lg:text-6xl text-2xl text-white"
            style={{ fontWeight: 200 }}
          >
            {data ? (
              "I'M" + " " + profile?.name
            ) : (
              <span className="loading loading-dots loading-md bg-white dark:bg-black"></span>
            )}
          </h1>
          <h2
            className="md:text-2xl text-md text-white "
            style={{ fontWeight: 200, letterSpacing: 5 }}
          >
            {data ? (
              profile?.profession
            ) : (
              <span className="loading loading-dots loading-md bg-white dark:bg-black"></span>
            )}
          </h2>
        </div>
        <div>
          {/* IMAGE */}
          {data ? (
            <Image
              src={profile?.img}
              width={500}
              height={500}
              alt="profile Image"
            />
          ) : (
            <span className="loading loading-dots loading-md bg-white dark:bg-black"></span>
          )}
        </div>
      </div>
      <div className={`${isChecked ? "bg-cyan-950" : "bg-white"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 150">
          <path
            fill="#1f1f1f"
            fill-opacity="1"
            d="M0,224L480,160L960,224L1440,192L1440,0L960,0L480,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
