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
