import React from 'react'

export default function Footer({profile}) {

  return (
    <div className="bg-gray-200 dark:bg-primary_black">
      <div className="primary-width py-5 bg-gray-200 dark:bg-primary_black">
        <div className="flex items-center justify-between">
          <h1 className="font-logo text-white text-xl sm:text-2xl md:text-4xl font-bold">
            {profile && profile?.logo}
          </h1>
          <div>
            <p className='dark text-xs sm:text-sm md:text-md'>{profile && profile?.copyright }</p>
          </div>
        </div>
      </div>
    </div>
  );
}
