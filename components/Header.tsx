"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { CubeIcon } from "@radix-ui/react-icons";
import { SunIcon, MoonIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import ProfileButton from "./ui/ProfileButton";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const routes = [
    { href: "/", label: "About" },

    { href: "/", label: "FAQ" },
  ];

  // Render your header
  return (
    <Container>
      <div className="flex items-center justify-between mx-auto">
        <Card className="flex items-center justify-center mx-auto py-1 mt-5 px-4">
          {/* Left side links */}
          <div className="flex justify-end flex-1">
            <a
              href={routes[0].href}
              className="font-semibold antialiased text-sm hover:text-opacity-75"
            >
              {routes[0].label}
            </a>
          </div>

          {/* Logo */}
          <div className="px-4">
            <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          </div>

          {/* Right side links */}
          <div className="flex justify-start flex-1">
            {/* Right side link */}
            <a
              href={routes[1].href}
              className="font-semibold antialiased text-sm hover:text-opacity-75"
            >
              {routes[1].label}
            </a>
          </div>
        </Card>
        <Button
          variant="ghost"
          size="icon"
          className="mr-6 mt-5"
          aria-label="Toggle Theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </div>
    </Container>
  );
};

export default Header;
