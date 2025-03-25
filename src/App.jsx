import LightDarkThemeContextProvider from "./contexts/LightDarkThemeContext";
import LangThemeContextProvider from "./contexts/LanguageThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <LightDarkThemeContextProvider>
      <LangThemeContextProvider>
        <Home />
      </LangThemeContextProvider>
    </LightDarkThemeContextProvider>
  );
}

export default App;
