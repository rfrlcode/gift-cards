import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Deal } from "@/types";
import { Button } from "@/components/ui/button";

interface ProductCard {
  data: Deal;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  return (
    <Card
      className="relative flex flex-col"
      aria-label={`Deal on ${data.product_name}`}
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
        <div className="flex justify-end pt-4 pr-4">
          <p className="antialiased text-xs text-muted-foreground">
            {data.date}
          </p>
        </div>
        {/* Image */}
        <div className="py-2 flex justify-center">
          <Image
            src={data.images?.[0]}
            alt={
              data.product_name
                ? `Image of ${data.product_name}`
                : "Product image"
            }
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
        {/* Description */}
        <div className="px-4 py-1">
          <p className="font-semibold antialiased text-sm">
            {data.product_name}
          </p>
          <p className="antialiased text-green-600 font-semibold mt-2 text-lg">
            {data.is_price}
          </p>
          <p className="antialiased text-slate-400 font-semibold text-sm">
            Was {data.was_price}
          </p>
        </div>
      </div>

      {/* Promo Code */}
      {data.code && (
        <div className="px-4 mt-4 flex flex-col items-start">
          <p className="text-xs font-semibold dark:text-gray-300">
            Use code at checkout:
          </p>
          <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded px-4 py-1">
            <p className="text-xs select-all dark:text-white">{data.code}</p>
          </div>
        </div>
      )}

      {/* Store Name and Grab Deal Button */}
      <div className="flex justify-between items-end px-4 py-4">
        <p className="antialiased text-xs text-gray-600">{data.store_name}</p>
        <Link href={data.deal_link} passHref>
          <Button>Grab Deal</Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProductCard;
