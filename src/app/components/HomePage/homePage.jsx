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
  const [data, setData] = useState({});            // State to store profile data
  const [loading, setLoading] = useState(true);    // Loading state to handle UI rendering
  
  // Function to fetch the profile data based on session status
  const fetchProfileData = async () => {
    try {
      // Check if the user is authenticated and has an email
      if (status === "authenticated" && session?.user?.email) {
        const userData = await getFullProfile(session.user.email);
        setData(userData?.result);  // Set user profile data
      } else {
        // Fetch default profile if no user is authenticated
        const defaultData = await getDefaultProfile();
        setData(defaultData?.result);  // Set default profile data
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);  // Stop the loading state after fetching the data
    }
  };

  // useEffect to run the fetchProfileData only once on component mount or session change
  useEffect(() => {
    if (status !== 'loading') {  // Ensure session has been checked
      fetchProfileData();  // Fetch profile data based on session
      
    }

  }, [status, session]);  // Trigger when session status or session data changes

  // While loading, show a loading indicator
  if (loading) {
    return <Loading/>;
  }

  // If no data is available (e.g., failed to fetch), show an error or placeholder
  if (!data) {
    return <div>No profile data available</div>;
  }
 console.log(data?.profile?.social_links)
  return (
    <div>
      <Banner profile={ data?.profile} />
      <AboutMe about_me={data?.about_me } skills={data?.skills} social_links={data?.profile?.social_links} />
      <Projects projects={data?.projects} />
      <Contact profile={ data?.profile} social_links={data?.profile?.social_links}/>
      <Footer profile={ data?.profile}/>
    </div>
  );
}
