import React, { useEffect, useState } from "react";
import { config } from "../../config";

export const useTheme = () => {
  const themeDefault = config.websiteId == 1 ? "forth" : "edge";
  const variantDefault = window.matchMedia("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
  const [themeStore, variantStore] = localStorage.getItem("theme")?.split("-") || [undefined, undefined];

  const [theme, setTheme] = useState(themeStore || themeDefault);
  const [variant, setVariant] = useState(variantStore || variantDefault);

  useEffect(() => {
    if (theme && variant) {
      localStorage.setItem("theme", `${theme}-${variant}`);
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.setAttribute("data-variant", variant);
    }

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleListener);

    return () => window.removeEventListener("change", handleListener);
  }, [theme, variant]);

  const handleListener = (e) => {
    const variantListener = e.matches ? "dark" : "light";
    setVariant(variantListener);
  };

  const handleChangeVariant = () => {
    const newVariant = variant == "dark" ? "light" : "dark";
    setVariant(newVariant);

    document.documentElement.setAttribute("data-variant", newVariant);
  };

  const handleChangeTheme = () => {
    const newTheme = theme == "forth" ? "edge" : "forth";
    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return { handleChangeVariant, handleChangeTheme };
};
