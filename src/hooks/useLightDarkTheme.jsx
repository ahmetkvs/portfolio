import { useContext } from "react";
import { ldThemeContext } from "../contexts/LightDarkThemeContext";

export default function useLightDarkTheme() {
  const context = useContext(ldThemeContext);
  if (!context) {
    console.error("useLightDarkTheme must be used within its Provider");
  }
  return context;
}
