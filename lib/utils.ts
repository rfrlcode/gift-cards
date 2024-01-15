import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cache } from "react";
import prisma from "@/lib/prisma";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchDeals = cache(async () => {
  const results = await prisma.deal.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return results;
});

export const fetchUniqueDealTitles = cache(async () => {
  const deals = await prisma.deal.findMany({
    distinct: ["brand_name"],
    select: {
      deal_title: true,
      image: true,
      brand_name: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Map each deal to include both deal_title and image
  return deals.map((deal) => ({
    title: deal.deal_title,
    image: deal.image,
    brandName: deal.brand_name,
  }));
});
