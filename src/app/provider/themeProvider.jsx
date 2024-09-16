"use client"
import React, { createContext, useState } from 'react'
export const themeProvider = createContext({})
export default function ThemeProvider({ children }) {
  const [isChecked, setisChecked] = useState(false);

  const themeObject = {
    isChecked,
    setisChecked
  }
  return (
    <themeProvider.Provider value={themeObject}>
      {children}
    </themeProvider.Provider>
  );
}
