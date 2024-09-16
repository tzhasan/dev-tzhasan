"use client"
import React, { useEffect, useState } from 'react'
import Banner from './banner';
import AboutMe from './aboutme';
import PortFolios from './portFolios';

export default function HomePage() {
  
  return (
    <div>
      <Banner />
      <AboutMe />
      <PortFolios/>
    </div>
  );
}
