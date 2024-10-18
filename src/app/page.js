"use client"
import HomePage from "./components/HomePage/homePage";
import Navbar from "./components/shared-component/navbar/navbar";
import { useSession } from "next-auth/react";

export default function Home() {
    const session = useSession();

  return (
    <div>
      <div className="relative z-10"></div>
      <div className="sticky top-0 w-full z-10">
        <Navbar />
      </div>
      <HomePage />
    </div>
  );
}
