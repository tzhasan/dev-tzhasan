"use client"
import React, { useContext } from 'react'
import { themeProvider } from '@/app/provider/themeProvider';

export default function Wavedown() {
  const { isChecked } = useContext(themeProvider);
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 110 1440 200">
        <path
          fill={isChecked ? "#1f1f1f" : "#f3f4f5"}
          fill-opacity="1"
          d="M0,192L480,224L960,128L1440,288L1440,320L960,320L480,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}

// <?xml version="1.0" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 110 1440 200"><path fill="#f3f4f5" fill-opacity="1" d="M0,192L480,224L960,128L1440,288L1440,320L960,320L480,320L0,320Z"></path></svg> 