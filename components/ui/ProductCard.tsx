import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Deal } from "@/types/index";
import { Button } from "@/components/ui/button";

interface ProductCard {
  data: Deal;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const imageUrl = data.link_to_image || "@/public/android-chrome-192x192.png"; // Replace with actual default image path

  return (
    <Card
      className="relative flex flex-col"
      aria-label={`Deal on ${data.deal_title}`}
    >
      {/* Conditional rendering for Discount Overlay */}
      {data.short_offer && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs uppercase py-1 px-2">
          {data.short_offer}
        </div>
      )}

      {/* Card Content */}
      <div className="flex-grow">
        {/* Date */}
        <div className="flex justify-end pt-2 pr-4">
          <p className="antialiased text-xs text-muted-foreground">
            {data.createdAt
              ? new Date(data.createdAt).toLocaleDateString()
              : "N/A"}
          </p>
        </div>
        {/* Image */}
        <div className="py-2 px-4 flex justify-center">
          <Image
            src={imageUrl}
            alt={
              data.deal_title ? `Image of ${data.deal_title}` : "Product image"
            }
            width={525}
            height={336}
            className="rounded-lg"
          />
        </div>
        {/* Description */}
        <div className="px-4 py-1">
          <p className="font-medium text-sm text-gray-600">{data.deal_title}</p>
          <p className="antialiased text-green-600 font-semibold mt-1 text-md">
            {data.is_price}
          </p>
          <p className="antialiased text-slate-400 font-semibold text-sm">
            {data.was_price}
          </p>
        </div>
      </div>

      {/* Promo Code */}
      {data.discount_code && (
        <div className="px-4 mt-4 flex flex-col items-start">
          <p className="text-xs font-semibold dark:text-gray-300">
            Use code at checkout:
          </p>
          <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded px-4 py-1">
            <p className="text-xs select-all dark:text-white">
              {data.discount_code}
            </p>
          </div>
        </div>
      )}

      {/* Store Name and Grab Deal Button */}
      <div className="flex justify-between items-end px-4 py-4">
        <p className="antialiased text-xs text-gray-600">{data.seller_name}</p>
        <Link
          href={data.link_to_deal}
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="rounded-full">Grab Deal</Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProductCard;
