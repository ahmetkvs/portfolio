import HomeLayout from "../layouts/HomeLayout";
import ThemeSwitchers from "../components/themeSwitchers/ThemeSwitchers";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <ThemeSwitchers />
      <Navbar />
      <HomeLayout />
      <Footer />
    </>
  );
}

export default Home;
