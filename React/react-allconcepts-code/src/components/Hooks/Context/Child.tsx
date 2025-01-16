import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Child = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: isDarkTheme ? "#333" : "#fff",
    color: isDarkTheme ? "#fff" : "#333",
    transition: "backgroundColor 0.5s, color 0.4s",
  };

  return (
    <div style={themeStyles}>
      <h3>{isDarkTheme ? "Dark Mode" : "Light Mode"}</h3>
      <button onClick={toggleTheme}>
        Switch to {isDarkTheme ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Child;
