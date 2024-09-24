import React from 'react'

export default function Footer() {
  return (
    <div className="bg-gray-200 dark:bg-primary_black">
      <div className="primary-width py-5 bg-gray-200 dark:bg-primary_black">
        <div className="flex items-center justify-between">
          <h1 className="font-logo text-white text-xl sm:text-2xl md:text-4xl font-bold">
            Tz-Hasan
          </h1>
          <div>
            <p className='dark text-xs sm:text-sm md:text-md'>© Tz-Hasan 2024, Dhaka 💖 Bangladesh.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
