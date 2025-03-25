import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Profile from "../components/profile/Profile";
import Skills from "../components/skills/Skills";

function HomeLayout() {
  return (
    <main className="min-h-screen w-screen px-4 md:px-8 lg:px-16 flex flex-col items-center space-y-8">
      <Header />
      <Skills />
      <hr className="w-full border-t-2 border-solid border-gray-300" />
      <Profile />
      <hr className="w-full border-t-2 border-solid border-gray-300" />
    </main>
  );
}

export default HomeLayout;
