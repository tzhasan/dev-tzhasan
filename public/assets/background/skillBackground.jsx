import { themeProvider } from '@/app/provider/themeProvider';
import React, { useContext } from 'react'

export default function SkillBackground() {
  const { isChecked } = useContext(themeProvider);

  return (
    <>
      <svg
        id="visual"
        viewBox="0 0 960 540"
        width="960"
        height="540"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <rect
          x="0"
          y="0"
          width="960"
          height="540"
          fill={`${isChecked ? "#fff" : "#fff"}`}
        ></rect>
        <g fill={`${isChecked ? "#fff" : "#000"}`}>
          <circle r="105" cx="516" cy="96"></circle>
          <circle r="59" cx="944" cy="357"></circle>
          <circle r="93" cx="43" cy="511"></circle>
          <circle r="93" cx="848" cy="81"></circle>
          <circle r="70" cx="408" cy="319"></circle>
          <circle r="82" cx="585" cy="491"></circle>
        </g>
      </svg>
    </>
  );
}
