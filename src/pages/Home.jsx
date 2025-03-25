import HomeLayout from "../layouts/HomeLayout";
import ThemeSwitchers from "../components/themeSwitchers/ThemeSwitchers";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useLightDarkTheme } from "../contexts/LightDarkThemeContext";

function Home() {
  const { ldTheme } = useLightDarkTheme();

  return (
    <main
      className={`min-h-screen w-screen px-4 md:px-8 lg:px-16 flex flex-col items-center space-y-8 ${
        ldTheme === "dark" ? "bg-zinc-900" : "bg-white"
      }`}
    >
      <ThemeSwitchers />
      <Navbar />
      <HomeLayout />
      <Footer />
    </main>
  );
}

export default Home;
