"use client";

import React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div className="flex justify-between items-center sticky top-0 z-50 p-4 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-50 blur-background">
      <Link href="/">
        <h1 className="text-2xl bg-gradient-to-r font-bold from-[#54F9E5] to-[#0074FB] text-transparent bg-clip-text cursor-pointer">
          Indigo Location
        </h1>
      </Link>

      <div className="flex gap-4 items-center">
        <Button
          type="button"
          variant="outline"
          aria-label="change theme"
          onClick={handleTheme}
          className={`w-fit h-fit p-2 border-none ${
            theme === "light" ? "btn-theme" : "btn-theme-dark"
          }`}
        >
          {theme === "light" ? (
            <SunIcon size={20} />
          ) : (
            <MoonIcon size={20} />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
