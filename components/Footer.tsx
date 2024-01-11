"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./ui/container";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const navigation = {
  more: [
    { name: "Who we are", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <Container>
      <footer className="z-10 border-t border-border bg-background/50 py-8 backdrop-blur-lg">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/">
              <span className="sr-only">GiftCardDeals.xyz Logo</span>
              <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            </Link>
            <p
              className="max-w-xs text-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              Your One-Stop Destination for the Best Deals on Gift Cards!
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0">
            <div>
              <h3
                className="text-sm font-semibold"
                style={{ color: "var(--primary-foreground)" }}
              >
                Legal
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="text-sm font-semibold"
                style={{ color: "var(--primary-foreground)" }}
              >
                More
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.more.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-10 border-t border-border pt-8">
          <p
            className="text-sm leading-5"
            style={{ color: "var(--muted-foreground)" }}
          >
            © {new Date().getFullYear()} GiftCardDeals.xyz
          </p>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </div>
      </footer>
    </Container>
  );
}
