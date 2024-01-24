"use client";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Container from "./ui/container";
import Image from "next/image";
import { CommandMenu } from "@/components/search";
import React, { useMemo } from "react";
import { MobileNav } from "./mobile-nav";
import { siteConfig } from "@/config/site";

interface NavProps {
  brands: { title: string; image: string; brandName: string }[];
}

export function Nav({ brands }: NavProps) {
  const selectedLayout = useSelectedLayoutSegment();

  const getLinkClass = (slug: string) =>
    `rounded-md px-3 py-2 text-sm font-medium`;

  // Use the provided brand titles and images
  const transformedBrands = useMemo(
    () =>
      brands.map((brand) => {
        const cleanedTitle = brand.title.replace("GiftCard", "").trim();
        return {
          title: cleanedTitle,
          href: `/brands/${brand.brandName}`,
        };
      }),
    [brands]
  );

  return (
    <Container>
      <div className="border-b border-border bg-background/75 backdrop-blur-lg">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <MobileNav
              mainNavItems={siteConfig.mainNav}
              footerItems={siteConfig.footerNav}
            />
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            </Link>

            <NavigationMenuPrimitive.Root
              delayDuration={0}
              className="relative hidden lg:block"
            >
              <NavigationMenuPrimitive.List className="flex flex-row space-x-2 p-4">
                {siteConfig.mainNav.map(({ title, href }) => (
                  <NavigationMenuPrimitive.Item key={href} asChild>
                    <Link
                      id={`nav-${href}`}
                      href={`${href}`}
                      className={getLinkClass(href)}
                    >
                      {title}
                    </Link>
                  </NavigationMenuPrimitive.Item>
                ))}
              </NavigationMenuPrimitive.List>

              <NavigationMenuPrimitive.Viewport className="data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content absolute left-0 top-full flex w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] justify-start rounded-lg border border-border bg-background shadow-lg" />
            </NavigationMenuPrimitive.Root>
          </div>
          <div>
            <CommandMenu brands={transformedBrands} />
          </div>
        </div>
      </div>
    </Container>
  );
}
