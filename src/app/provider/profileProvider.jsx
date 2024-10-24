"use client"
import React, { createContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { getDefaultProfile, getFullProfile } from '../utils/dataFetch';
export const profileContext = createContext({})
export default function ProfileProvider({children}) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(false); 
const { data: session, status } = useSession();
  const fetchProfileData = async () => {
    setLoading(true)
    try {
      if (status === "authenticated" && session?.user?.email) {
        const userData = await getFullProfile(session?.user?.email);
        setProfile(userData?.result); 
        setLoading(false);
      } else {
        // Fetch default profile if no user is authenticated
        const defaultData = await getDefaultProfile();
        setProfile(defaultData?.result);
        setLoading(false);

      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [status, session]);
  
  const values = {
    profile,
    setProfile,
    loading,
    setLoading,
  };
  return (
    <profileContext.Provider value={values}>
      {children}
    </profileContext.Provider>
  );
}
