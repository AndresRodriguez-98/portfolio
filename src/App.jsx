import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Experience from "./assets/components/Experience";
import Home from "./assets/components/Home";
import NavBar from "./assets/components/NavBar";
import Proyects from "./assets/components/Proyects";
import SocialLinks from "./assets/components/SocialLinks";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        <NavBar onThemeChange={toggleTheme} checked={theme === "dark"} />
        <Home />
        <About />
        <Proyects />
        <Experience />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}
