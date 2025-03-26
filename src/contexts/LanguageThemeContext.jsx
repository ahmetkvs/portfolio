import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const langThemeContext = createContext(null);

export default function LangThemeContextProvider({ children }) {
  const [langTheme, setLangTheme] = useLocalStorage("langTheme", "en");

  return (
    <langThemeContext.Provider value={{ langTheme, setLangTheme }}>
      {children}
    </langThemeContext.Provider>
  );
}
