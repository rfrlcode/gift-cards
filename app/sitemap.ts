import { MetadataRoute } from "next";
import { allBlogs } from "contentlayer/generated";
import siteMetadata from "@/content/siteMetadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;
  const blogRoutes = allBlogs.map((post) => ({
    url: `${siteUrl}${post.slug}`,
    lastModified: post.lastmod || post.date,
  }));

  const routes = [
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

  return [...routes, ...blogRoutes];
}
