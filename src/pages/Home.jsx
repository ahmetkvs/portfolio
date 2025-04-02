import React, { useState, useEffect, useRef, useCallback } from "react";
import HomeLayout from "../layouts/HomeLayout";
import ThemeSwitchers from "../components/themeSwitchers/ThemeSwitchers";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import useLightDarkTheme from "../hooks/useLightDarkTheme";

function Home() {
  const { ldTheme } = useLightDarkTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactHighlighted, setIsContactHighlighted] = useState(false);

  const highlightTimerRef = useRef(null);

  const triggerContactHighlight = useCallback(() => {
    if (highlightTimerRef.current) {
      clearTimeout(highlightTimerRef.current);
    }

    setIsContactHighlighted(true);
    console.log("Highlight on");

    highlightTimerRef.current = setTimeout(() => {
      setIsContactHighlighted(false);
      highlightTimerRef.current = null;
      console.log("Highlight off");
    }, 1000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (highlightTimerRef.current) {
        clearTimeout(highlightTimerRef.current);
      }
    };
  }, []);

  return (
    <main
      className={`min-h-screen w-screen px-4 md:px-8 lg:px-16 flex flex-col items-center space-y-8 ${
        ldTheme === "dark" ? "bg-zinc-900" : "bg-white"
      }`}
    >
      <div
        className={`sticky top-0 z-30 w-full bg-opacity-80 backdrop-blur-md ${
          isScrolled ? "border-b" : ""
        } ${ldTheme === "dark" ? "bg-zinc-900/80 border-b-zinc-700" : "bg-white/80 border-b-gray-300"}`}
      >
        <ThemeSwitchers />
        <Navbar onHireMeClick={triggerContactHighlight} />
      </div>
      <HomeLayout onHireMeClick={triggerContactHighlight} />
      <Footer highlightContactSection={isContactHighlighted} />
    </main>
  );
}

export default Home;
