import { useContext } from "react";
import { langThemeContext } from "../contexts/LanguageThemeContext";

export default function useLangTheme() {
  const context = useContext(langThemeContext);
  if (!context) {
    console.error("useLangTheme must be used within its Provider");
  }
  return context;
}
