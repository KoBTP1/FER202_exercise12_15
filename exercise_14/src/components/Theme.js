import React, { createContext, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#61dafb",
  },
};
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? themes.dark : themes.light;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
function Theme() {
  const { theme, toggleTheme, isDark } = useTheme();
  return (
    <div>
      <Container
        style={{
          backgroundColor: theme.background,
          color: theme.foreground,
        }}
      >
        <h3>Current Theme: {isDark ? "Dark" : "Light"}</h3>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: theme.foreground,
            color: theme.background,
          }}
        >
          Toggle Theme
        </button>
      </Container>
    </div>
  );
}

export default Theme;
