"use client";
import Container from "./ui/container";
import { cn } from "@/lib/utils";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

import { useEffect, useState } from "react";

import { navItems } from "./Nav";

export function NavMobile() {
  const [open, setOpen] = useState(false);

  // prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <Container>
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "absolute right-3 top-3 z-40 rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 focus:outline-none active:bg-gray-300 lg:hidden",
            open && "hover:bg-gray-100 active:bg-gray-200"
          )}
        >
          {open ? (
            <Cross2Icon className="h-5 w-5 text-gray-600" />
          ) : (
            <HamburgerMenuIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>
        <nav
          className={cn(
            "fixed inset-0 z-20 hidden w-full bg-white px-5 py-16 lg:hidden overflow-y-auto",
            open && "block"
          )}
          style={{ maxHeight: "33vh" }}
        >
          <ul className="grid divide-y divide-gray-200">
            {navItems.map(({ name, slug }) => (
              <li key={slug} className="py-3">
                <Link
                  href={`/${slug}`}
                  onClick={() => setOpen(false)}
                  className="flex w-full font-semibold capitalize"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </>
  );
}
