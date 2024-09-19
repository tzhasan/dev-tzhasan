"use client";
import React, { useEffect, useState } from "react";
import Banner from "./banner";
import AboutMe from "./aboutme";
import Projects from "./projects";
import Contact from "./contact";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
