import { createContext, useContext, useState } from "react";

const langThemeContext = createContext(null);

export default function LangThemeContextProvider({ children }) {
  const [langTheme, setLangTheme] = useState("en");

  return (
    <langThemeContext.Provider value={{ langTheme, setLangTheme }}>
      {children}
    </langThemeContext.Provider>
  );
}

export function useLangTheme() {
  const context = useContext(langThemeContext);
  if (!context) {
    console.error("useLightDarkTheme must be used within its Provider");
  }
  return context;
}
