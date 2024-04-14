import { Client } from "@notionhq/client";
import { cache } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Francois_One } from "next/font/google";
import prisma from "@/lib/prisma";

export const headerFont = Francois_One({ weight: "400", subsets: ["latin"] });

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchDeals = cache(async () => {
  try {
    // Fetch deals from the database using Prisma and sort by createdAt in descending order
    const deals = await prisma.deal.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return deals.map((deal) => ({
      id: deal.id,
      deal_title: deal.deal_title,
      brand_name: deal.brand_name,
      short_offer: deal.short_offer || undefined,
      BrandName: deal.BrandName,
      seller_name: deal.seller_name || undefined,
      expiration_date: deal.expiration_date
        ? new Date(deal.expiration_date)
        : undefined,
      discount_code: deal.discount_code || undefined,
      is_price: deal.is_price,
      was_price: deal.was_price || undefined,
      link_to_image: deal.link_to_image,
      link_to_deal: deal.link_to_deal,
      createdAt: deal.createdAt ? new Date(deal.createdAt) : undefined,
    }));
  } catch (error) {
    console.error("Error fetching deals:", error);
    return [];
  }
});

export const fetchUniqueDealTitles = cache(async () => {
  try {
    // Get detailed information for all pages
    const pageDetails = await fetchDeals();

    // Create a map to hold unique deals by brand_name
    const uniqueDeals = new Map();

    // Process each page to extract deal details
    pageDetails.forEach((page) => {
      if (page && page.brand_name && !uniqueDeals.has(page.brand_name)) {
        uniqueDeals.set(page.brand_name, {
          title: page.deal_title,
          image: page.link_to_image,
          brandName: page.brand_name,
        });
      }
    });

    // Convert the map values to an array
    return Array.from(uniqueDeals.values());
  } catch (error) {
    console.error("Error fetching unique deal titles:", error);
    return []; // Return an empty array or handle the error as needed
  }
});
