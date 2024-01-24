import { Client } from "@notionhq/client";
import { cache } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Francois_One } from "next/font/google";

export const headerFont = Francois_One({ weight: "400", subsets: ["latin"] });

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

declare global {
  var notionClient: Client | undefined;
}

const notionClient =
  global.notionClient || new Client({ auth: process.env.NOTION_TOKEN });

if (process.env.NODE_ENV === "development") global.notionClient = notionClient;

export default notionClient;

export const getPages = cache(async () => {
  // Query the database to get the page IDs
  const queryResponse = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    sorts: [
      {
        property: "Created Time",
        direction: "descending",
      },
    ],
  });

  return queryResponse.results;
});

export const fetchDeals = cache(async () => {
  try {
    // Get the array of pages
    const pages = await getPages();
    return pages.map((page: any) => {
      const getPropertyValue = (propertyName: string) => {
        try {
          const property = page.properties[propertyName];
          if (!property) return null;

          // Extract the property type
          const propertyType = property.type;

          if (propertyType === "url" && property.url) {
            return property.url;
          } else if (
            propertyType === "rich_text" &&
            property.rich_text.length > 0 &&
            property.rich_text[0].plain_text
          ) {
            return property.rich_text[0].plain_text;
          } else if (
            propertyType === "title" &&
            property.title.length > 0 &&
            property.title[0].plain_text
          ) {
            return property.title[0].plain_text;
          } else if (propertyType === "created_time" && property.created_time) {
            return property.created_time;
          }

          return null;
        } catch (error) {
          console.error(`Error processing property ${propertyName}:`, error);
          return null;
        }
      };

      try {
        return {
          id: getPropertyValue("id"),
          deal_title: getPropertyValue("deal_title"),
          brand_name: getPropertyValue("brand_name"),
          short_offer: getPropertyValue("short_offer"),
          BrandName: getPropertyValue("Brand Name"),
          seller_name: getPropertyValue("seller_name"),
          expiration_date: getPropertyValue("expiration_date"),
          discount_code: getPropertyValue("discount_code"),
          is_price: getPropertyValue("is_price"),
          was_price: getPropertyValue("was_price"),
          link_to_image: getPropertyValue("link_to_image"),
          link_to_deal: getPropertyValue("link_to_deal"),
          createdAt: getPropertyValue("Created Time"),
        };
      } catch (error) {
        console.error(`Error processing page ${page.id}:`, error);
        return null; // or an appropriate default object
      }
    });
  } catch (error) {
    console.error("Error fetching page details:", error);
    return []; // Return an empty array or handle the error as needed
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
