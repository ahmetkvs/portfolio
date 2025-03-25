import { createContext, useContext, useState } from "react";

const ldThemeContext = createContext(null);

export default function LightDarkThemeContextProvider({ children }) {
  const [ldTheme, setLdTheme] = useState("light");

  return (
    <ldThemeContext.Provider value={{ ldTheme, setLdTheme }}>
      {children}
    </ldThemeContext.Provider>
  );
}

export function useLightDarkTheme() {
  const context = useContext(ldThemeContext);
  if (!context) {
    console.error("useLightDarkTheme must be used within its Provider");
  }
  return context;
}
