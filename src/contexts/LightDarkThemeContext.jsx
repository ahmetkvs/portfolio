import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ldThemeContext = createContext(null);

export default function LightDarkThemeContextProvider({ children }) {
  const [ldTheme, setLdTheme] = useLocalStorage("ldTheme", "light");

  return (
    <ldThemeContext.Provider value={{ ldTheme, setLdTheme }}>
      {children}
    </ldThemeContext.Provider>
  );
}
