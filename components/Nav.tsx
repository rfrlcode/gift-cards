"use client";

import { cn } from "@/lib/utils";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Container from "./ui/container";
import Image from "next/image";
// import { useTheme } from "next-themes";
// import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
// import { Button } from "./ui/button";

import LogoType from "@/components/LogoType";

export const navItems = [
  {
    name: "About Us",
    slug: "about",
  },
];

export function Nav() {
  const selectedLayout = useSelectedLayoutSegment();
  // const { theme, setTheme } = useTheme();

  return (
    <Container>
      <div
        className={`border-b border-border bg-background/75 backdrop-blur-lg`}
      >
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            </Link>

            <NavigationMenuPrimitive.Root
              delayDuration={0}
              className="relative hidden lg:block"
            >
              <NavigationMenuPrimitive.List className="flex flex-row space-x-2 p-4">
                {navItems.map(({ name, slug }) => (
                  <NavigationMenuPrimitive.Item key={slug} asChild>
                    <Link
                      id={`nav-${slug}`}
                      key={slug}
                      href={`/${slug}`}
                      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ease-out hover:text-primary ${
                        selectedLayout === slug
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {name}
                    </Link>
                  </NavigationMenuPrimitive.Item>
                ))}
              </NavigationMenuPrimitive.List>

              <NavigationMenuPrimitive.Viewport className="data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content absolute left-0 top-full flex w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] justify-start rounded-lg border border-border bg-background shadow-lg" />
            </NavigationMenuPrimitive.Root>

            {/* <Button
              variant="ghost"
              size="icon"
              className="mr-6 mt-5"
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button> */}
          </div>
        </div>
      </div>
    </Container>
  );
}
