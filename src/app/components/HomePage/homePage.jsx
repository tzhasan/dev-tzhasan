"use client"
import React, { useEffect, useState } from 'react'
import Banner from './banner';
import AboutMe from './aboutme';

export default function HomePage() {
 
  return (
    <div className=" dark:bg-zinc-900">
      <Banner />
      <AboutMe />
    </div>
  );
}
