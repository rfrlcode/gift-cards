"use client";

import { cn } from "@/lib/utils";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Container from "./ui/container";
import Image from "next/image";

import LogoType from "@/components/LogoType";

export const navItems = [
  {
    name: "About Us",
    slug: "about",
  },
];

export function Nav() {
  const selectedLayout = useSelectedLayoutSegment();
  return (
    <Container>
      <div className="border-b border-gray-200 bg-white/75 backdrop-blur-lg">
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
                      className={cn(
                        "rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black",
                        {
                          "text-black": selectedLayout === slug,
                        }
                      )}
                    >
                      {name}
                    </Link>
                  </NavigationMenuPrimitive.Item>
                ))}
              </NavigationMenuPrimitive.List>

              <NavigationMenuPrimitive.Viewport className="data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content absolute left-0 top-full flex w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] justify-start rounded-lg border border-gray-200 bg-white shadow-lg" />
            </NavigationMenuPrimitive.Root>
          </div>
        </div>
      </div>
    </Container>
  );
}
