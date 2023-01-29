import React, { useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
