import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import ThemeSwitchers from "./components/themeSwitchers/ThemeSwitchers";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen w-screen px-4 md:px-8 lg:px-16 flex flex-col items-center space-y-8">
        <ThemeSwitchers />
        <Navbar />
        <Header />
        <Skills />
        <hr className="w-full border-t-2 border-solid border-gray-400 mr-2" />
      </main>
    </BrowserRouter>
  );
}

export default App;
