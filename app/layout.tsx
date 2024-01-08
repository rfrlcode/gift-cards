import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { fetchUniqueDealTitles } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Gift Cards", "Gift Card Deals", "Gift Card Discounts"],
  authors: [
    {
      name: "Ritanshu Dokania",
      url: "https://www.ritanshudokania.xyz/",
    },
  ],
  creator: "Ritanshu Dokania",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};
export const revalidate = 10800; // revalidate the data at most every hour

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const brandNames = await fetchUniqueDealTitles();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav brands={brandNames} />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
