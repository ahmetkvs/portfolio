import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Profile from "../components/profile/Profile";
import Skills from "../components/skills/Skills";

function HomeLayout() {
  return (
    <>
      <Header />
      <Skills />
      <hr className="w-full border-t-2 border-solid border-gray-300" />
      <Profile />
      <hr className="w-full border-t-2 border-solid border-gray-300" />
    </>
  );
}

export default HomeLayout;
