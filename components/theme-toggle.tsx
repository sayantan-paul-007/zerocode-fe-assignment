'use client';
import { useTheme } from "next-themes";
import { Moon,Sun } from "lucide-react";
import { useEffect, useState } from "react";
export default function Themetoggle(){
const { theme, setTheme } = useTheme(); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
   <>
   {mounted && (
        <button className="p-2 rounded-full" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? (
            <Moon size={24} />
          ) : (
            <Sun size={24} />
          )}
        </button> )}
   </>
  
  );
}