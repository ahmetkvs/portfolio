import LightDarkThemeContextProvider from "./contexts/LightDarkThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <LightDarkThemeContextProvider>
      <Home />
    </LightDarkThemeContextProvider>
  );
}

export default App;
