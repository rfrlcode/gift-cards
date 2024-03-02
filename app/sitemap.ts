import { MetadataRoute } from "next";
import { allBlogs } from "contentlayer/generated";
import siteMetadata from "@/content/siteMetadata";
import { fetchUniqueDealTitles } from "@/lib/utils";

// Assuming this function is defined in the same or accessible file
export const brands = async () => {
  const allBrands = await fetchUniqueDealTitles(); // Fetch all unique deal titles
  return allBrands.map((brand) => ({ brand: brand.brandName }));
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = siteMetadata.siteUrl;

  // Generate blog routes
  const blogRoutes = allBlogs.map((post) => ({
    url: `${siteUrl}${post.slug}`,
    lastModified: post.lastmod || post.date,
  }));

  // Generate static routes
  const staticRoutes = [
    "",
    "blog",
    "terms",
    "privacy",
    "affiliate-disclosure",
    "about",
  ].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date(),
  }));

  // Fetch and generate brand routes
  const brandRoutes = (await brands()).map((brand) => ({
    url: `${siteUrl}/brands/${brand.brand}`,
    lastModified: new Date(), // You can set a specific last modified date if available
  }));

  // Combine all routes
  return [...staticRoutes, ...blogRoutes, ...brandRoutes];
}
