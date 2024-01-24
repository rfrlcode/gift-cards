"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavItem } from "@/types/nav";
import { FooterItem } from "@/types/nav";
import Image from "next/image";
import { headerFont } from "@/lib/utils";

interface MobileNavProps {
  mainNavItems?: NavItem[];
  footerItems?: FooterItem[];
}

export function MobileNav({ mainNavItems, footerItems }: MobileNavProps) {
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = React.useMemo(() => {
    const items = footerItems ?? [];
    return items;
  }, [footerItems]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="mr-4 px-2 rounded text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <HamburgerMenuIcon className="h-4 w-4" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <div className="px-7">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={40} height={40} />
            </Link>
            <span className={`ml-2 text-lg ${headerFont.className}`}>
              GiftCard<span className="text-primary">Deals</span>
            </span>
            <span className="sr-only">Home</span>
          </Link>
        </div>

        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          {mainNavItems?.map((navItem, index) => (
            <div key={index} className="pl-1 pr-7">
              <MobileLink
                href={navItem.href}
                setIsOpen={setIsOpen}
                segment={String(segment)}
              >
                <span className="text-foreground dark:text-foreground flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
                  {navItem.title}
                </span>
              </MobileLink>
            </div>
          ))}

          <div className="pl-1 pr-7">
            <Accordion type="single" collapsible className="w-full">
              {navItems?.map((item, index) => (
                <AccordionItem value={item.title} key={index}>
                  <AccordionTrigger className="text-sm capitalize">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2">
                      {item.items?.map((subItem, index) =>
                        subItem.href ? (
                          <MobileLink
                            key={index}
                            href={String(subItem.href)}
                            segment={String(segment)}
                            setIsOpen={setIsOpen}
                          >
                            {subItem.title}
                          </MobileLink>
                        ) : (
                          <div
                            key={index}
                            className="text-foreground/70 transition-colors"
                          >
                            {item.title}
                          </div>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string;
  disabled?: boolean;
  segment: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        href.includes(segment) && "text-foreground",
        disabled && "pointer-events-none opacity-60"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}
