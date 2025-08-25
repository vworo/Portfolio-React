import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid rendering anything until mounted to prevent hydration mismatch
    return null;
  }

  const isDarkMode = theme === "dark";

  return isDarkMode ? (
    <IconButton color="inherit" onClick={() => setTheme("light")}>
      <LightModeIcon />
    </IconButton>
  ) : (
    <IconButton color="inherit" onClick={() => setTheme("dark")}>
      <DarkModeIcon />
    </IconButton>
  );
}
