"use client"
import React, { createContext, useState } from 'react'

export const MenuBarContext = createContext({  });
export default function MenubarProvider({ children }) {
  const [menuBar, setMenuBar] = useState(false);
  const values = {
    menuBar,
    setMenuBar
}
  return <MenuBarContext.Provider value={values}>{children}</MenuBarContext.Provider>;
}
