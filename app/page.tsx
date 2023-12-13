"use client";

import Container from "@/components/ui/container";
import ProductList from "@/components/ProductList";
import Link from "next/link";

const deals = [
  {
    id: "1",
    product_name: "$25 GrubHub Giftcard",
    is_price: "$15",
    was_price: "$25",
    store_name: "Amazon",
    deal_link: "https://www.radix-ui.com/icons",
    date: "December 9, 2023",
    short_offer: "$10 off",
    images: ["/image.webp"],
  },
  {
    id: "2",
    product_name: "$25 GrubHub Giftcard",
    is_price: "$15",
    was_price: "$25",
    store_name: "Amazon",
    deal_link: "https://www.radix-ui.com/icons",
    date: "December 9, 2023",
    short_offer: "$10 off",
    images: ["/image.webp"],
  },
  {
    id: "3",
    product_name: "$25 GrubHub Giftcard",
    is_price: "$15",
    was_price: "$25",
    code: "GBHJ23",
    store_name: "Amazon",
    deal_link: "https://www.radix-ui.com/icons",
    date: "December 9, 2023",
    short_offer: "$10 off",
    images: ["/image.webp"],
  },
  {
    id: "4",
    product_name: "$25 GrubHub Giftcard",
    is_price: "$15",
    was_price: "$25",
    store_name: "Amazon",
    deal_link: "https://www.radix-ui.com/icons",
    date: "December 9, 2023",
    short_offer: "$10 off",
    images: ["/image.webp"],
  },
  {
    id: "5",
    product_name: "$25 GrubHub Giftcard",
    is_price: "$15",
    was_price: "$25",
    store_name: "Amazon",
    deal_link: "https://www.radix-ui.com/icons",
    date: "December 9, 2023",
    short_offer: "$10 off",
    images: ["/image.webp"],
  },
  {
    id: "6",
    product_name: "$25 GrubHub Giftcard",
    is_price: "$15",
    was_price: "$25",
    code: "GBHJ23",
    store_name: "Amazon",
    deal_link: "https://www.radix-ui.com/icons",
    date: "December 9, 2023",
    short_offer: "$10 off",
    images: ["/image.webp"],
  },
  {
    id: "7",
    product_name: "$25 GrubHub Giftcard",
    is_price: "$15",
    was_price: "$25",
    store_name: "Amazon",
    deal_link: "https://www.radix-ui.com/icons",
    date: "December 9, 2023",
    short_offer: "$10 off",
    images: ["/image.webp"],
  },
  {
    id: "8",
    product_name: "$25 GrubHub Giftcard",
    is_price: "$15",
    was_price: "$25",
    code: "GBHJ23",
    store_name: "Amazon",
    deal_link: "https://www.radix-ui.com/icons",
    date: "December 9, 2023",
    short_offer: "$10 off",
    images: ["/image.webp"],
  },
];

export default function CardsPage() {
  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <div className="container px-4 md:px-6 mt-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  GiftCardDeals
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your One-Stop Destination for the Best Deals on Gift Cards!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList items={deals} />
          </div>
        </div>
      </Container>
    </div>
  );
}
