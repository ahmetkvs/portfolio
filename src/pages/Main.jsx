import MainLayout from "../layouts/MainLayout";
import ThemeSwitchers from "../components/themeSwitchers/ThemeSwitchers";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Main() {
  return (
    <>
      <ThemeSwitchers />
      <Navbar />
      <MainLayout />
      <Footer />
    </>
  );
}

export default Main;
