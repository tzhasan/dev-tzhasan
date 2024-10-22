"use client";
import React, { useEffect, useState } from "react";
import Banner from "./banner";
import AboutMe from "./aboutme";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "../shared-component/footer";
import { useSession } from "next-auth/react";
import { getDefaultProfile, getFullProfile } from "@/app/utils/dataFetch";
import Loading from "@/app/loading";

export default function HomePage() {
 const { data: session, status } = useSession();  // Get session data and status
 const [fullProfile, setfullProfile] = useState({});            // State to store profile data
 const [loading, setLoading] = useState(true);    // Loading state to handle UI rendering
 
  // Function to fetch the profile data based on session status
  const fetchProfileData = async () => {
    try {
      if (status === "authenticated" && session?.user?.email) {
        const userData = await getFullProfile(session?.user?.email);
        setfullProfile(userData?.result);  // Set user profile data
      } else {
        // Fetch default profile if no user is authenticated
        const defaultData = await getDefaultProfile();
        setfullProfile(defaultData?.result);  // Set default profile data
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);  // Stop the loading state after fetching the data
    }
  };

 useEffect(() => {
   fetchProfileData();
 }, [status, session]);

  // While loading, show a loading indicator
  if (loading) {
    return <Loading/>;
  }

  // If no data is available (e.g., failed to fetch), show an error or placeholder
  if (!fullProfile) {
    return <div>No profile data available</div>;
  }

  return (
    <div>
      <Banner profile={ fullProfile?.profile} />
      <AboutMe about_me={fullProfile?.about_me } skills={fullProfile?.skills} social_links={fullProfile?.profile?.social_links} />
      <Projects projects={fullProfile?.projects} />
      <Contact profile={ fullProfile?.profile} social_links={fullProfile?.profile?.social_links}/>
      <Footer profile={ fullProfile?.profile}/>
    </div>
  );
}
