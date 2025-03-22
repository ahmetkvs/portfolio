import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import ThemeSwitchers from "./components/themeSwitchers/ThemeSwitchers";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen w-7/10 mx-auto flex flex-col items-center">
        <ThemeSwitchers />
        <Navbar />
        <Header />
      </main>
    </BrowserRouter>
  );
}

export default App;
