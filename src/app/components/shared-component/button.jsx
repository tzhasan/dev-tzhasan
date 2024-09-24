import React from 'react'

export default function Button({ text, loading, type, onSubmit }) {
  return (
    <div className="bg-topnav dark:bg-gray-300  flex items-center min-w-36 min-h-10 justify-center hover:bg-black dark:hover:bg-gray-400 transition duration-300">
      {loading ? (
        <span className="loading loading-dots loading-md bg-white dark:bg-black"></span>
      ) : (
        <button
          onSubmit={onSubmit}
          type={type}
          className="text-white dark:text-primary_black font-semibold"
        >
          {text}
        </button>
      )}
    </div>
  );
}
