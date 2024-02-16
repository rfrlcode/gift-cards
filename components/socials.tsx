import React from "react";
import {
  TwitterLogoIcon as Twitter,
  InstagramLogoIcon as Instagram,
} from "@radix-ui/react-icons";

import { FaFacebook as Facebook } from "react-icons/fa";
import { FaReddit as Reddit, FaThreads as Threads } from "react-icons/fa6";

export function Socials() {
  return (
    <>
      <a
        href="https://twitter.com/GiftCardDeals1"
        target="_blank"
        rel="noreferrer"
        className="group rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
      >
        <span className="sr-only">Twitter</span>
        <Twitter className="h-5 w-5 text-gray-600" />
      </a>
      <div className="h-8 border-l border-gray-200" />
      <a
        href="https://www.instagram.com/giftcarddeals.xyz/"
        target="_blank"
        rel="noreferrer"
        className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
      >
        <span className="sr-only">Instagram</span>
        <Instagram className="h-5 w-5 text-gray-600" />
      </a>
      <div className="h-8 border-l border-gray-200" />
      <a
        href="https://www.facebook.com/people/Giftcard-Deals/61556402974903/"
        target="_blank"
        rel="noreferrer"
        className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
      >
        <span className="sr-only">LinkedIn</span>
        <Facebook className="h-5 w-5" fill="#52525B" />
      </a>
      <div className="h-8 border-l border-gray-200" />
      <a
        href="https://www.reddit.com/r/BestGiftCardDeals/"
        target="_blank"
        rel="noreferrer"
        className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
      >
        <span className="sr-only">Reddit</span>
        <Reddit className="h-5 w-5" fill="#52525B" />
      </a>
      <div className="h-8 border-l border-gray-200" />
      <a
        href="https://www.threads.net/@giftcarddeals.xyz"
        target="_blank"
        rel="noreferrer"
        className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
      >
        <span className="sr-only">Threads</span>
        <Threads className="h-5 w-5" fill="#52525B" />
      </a>
    </>
  );
}
