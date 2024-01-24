import type { FooterItem, NavItem } from "@/types/nav";
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "GiftCardDeals",
  description: "Your One-Stop Destination for the Best Deals on Gift Cards!",
  url: "https://giftcarddeals.xyz",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ] satisfies NavItem[],
  footerNav: [
    {
      title: "Legal",
      items: [
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
        {
          title: "Affiliate Disclosure",
          href: "/affiliate-disclosure",
          external: false,
        },
      ],
    },
  ] satisfies FooterItem[],
};
