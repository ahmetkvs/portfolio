import React, { useState, useEffect } from "react";
import HomeLayout from "../layouts/HomeLayout";
import ThemeSwitchers from "../components/themeSwitchers/ThemeSwitchers";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useLightDarkTheme } from "../contexts/LightDarkThemeContext";

function Home() {
  const { ldTheme } = useLightDarkTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <Navbar />
      </div>
      <HomeLayout />
      <Footer />
    </main>
  );
}

export default Home;
