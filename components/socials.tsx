import React from "react";
import {
  TwitterLogoIcon as Twitter,
  InstagramLogoIcon as Instagram,
} from "@radix-ui/react-icons";
import { FaFacebook as Facebook } from "react-icons/fa";
import { FaThreads as Threads } from "react-icons/fa6";
import { PiRedditLogoLight as Reddit } from "react-icons/pi";

export function Socials() {
  // Dynamic fill color for dark mode
  const fillColor = "dark:fill-white fill-gray-600"; // Adjust the fill color for dark mode

  return (
    <>
      <a
        href="https://twitter.com/GiftCardDeals1"
        target="_blank"
        rel="noreferrer"
        className="group rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-700 dark:active:bg-gray-600"
      >
        <span className="sr-only">Twitter</span>
        <Twitter className="h-5 w-5 text-gray-600 dark:text-white" />
      </a>
      <div className="h-8 border-l border-gray-200 dark:border-gray-700" />
      <a
        href="https://www.instagram.com/giftcarddeals.xyz/"
        target="_blank"
        rel="noreferrer"
        className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-700 dark:active:bg-gray-600"
      >
        <span className="sr-only">Instagram</span>
        <Instagram className="h-5 w-5 text-gray-600 dark:text-white" />
      </a>
      <div className="h-8 border-l border-gray-200 dark:border-gray-700" />
      <a
        href="https://www.facebook.com/people/Giftcard-Deals/61556402974903/"
        target="_blank"
        rel="noreferrer"
        className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-700 dark:active:bg-gray-600"
      >
        <span className="sr-only">Facebook</span>
        {/* Apply dynamic fill color based on dark mode */}
        <Facebook className={`h-5 w-5 ${fillColor}`} />
      </a>
      <div className="h-8 border-l border-gray-200 dark:border-gray-700" />
      <a
        href="https://www.reddit.com/r/BestGiftCardDeals/"
        target="_blank"
        rel="noreferrer"
        className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-700 dark:active:bg-gray-600"
      >
        <span className="sr-only">Reddit</span>
        {/* Apply dynamic fill color based on dark mode */}
        <Reddit className={`h-5 w-5 ${fillColor}`} />
      </a>
      <div className="h-8 border-l border-gray-200 dark:border-gray-700" />
      <a
        href="https://www.threads.net/@giftcarddeals.xyz"
        target="_blank"
        rel="noreferrer"
        className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-700 dark:active:bg-gray-600"
      >
        <span className="sr-only">Threads</span>
        {/* Apply dynamic fill color based on dark mode */}
        <Threads className={`h-5 w-5 ${fillColor}`} />
      </a>
    </>
  );
}
