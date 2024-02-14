import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Card } from "@/components/ui/card";
import { Deal } from "@/types/index";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  data: Deal;
}

interface DealImageProps {
  dealTitle: string;
  imageUrl: string;
  width: number;
  height: number;
}

interface ProductDescriptionProps {
  dealTitle: string;
  isPrice: string;
  wasPrice: string | undefined;
}

interface PromoCodeProps {
  discountCode: string | undefined;
}

const DEFAULT_IMAGE_PATH = "@/public/android-chrome-192x192.png";

const DealImage: React.FC<DealImageProps> = ({
  dealTitle,
  imageUrl,
  width,
  height,
}) => (
  <Image
    src={imageUrl}
    alt={dealTitle ? `Image of ${dealTitle}` : "Product image"}
    width={width}
    height={height}
    className={width === 525 ? "rounded-lg" : ""}
  />
);

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  dealTitle,
  isPrice,
  wasPrice,
}) => (
  <div className="px-4 py-1">
    <p className="font-medium text-sm text-gray-600 dark:text-card-foreground">
      {dealTitle}
    </p>
    <p className="antialiased text-green-600 font-semibold mt-1 text-md">
      {isPrice}
    </p>
    <p className="antialiased text-slate-400 font-semibold text-sm">
      {wasPrice}
    </p>
  </div>
);

const PromoCode: React.FC<PromoCodeProps> = ({ discountCode }) =>
  discountCode && (
    <div className="px-4 mt-4 flex flex-col items-start">
      <p className="text-xs font-semibold dark:text-gray-300">
        Use code at checkout:
      </p>
      <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded px-4 py-1">
        <p className="text-xs select-all dark:text-white">{discountCode}</p>
      </div>
    </div>
  );

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const {
    deal_title,
    link_to_image = DEFAULT_IMAGE_PATH,
    createdAt,
    expiration_date,
    short_offer,
    is_price,
    was_price,
    discount_code,
    seller_name,
    link_to_deal,
  } = data;
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString()
    : "N/A";
  const currentDate = new Date();
  const expirationDate = expiration_date
    ? new Date(expiration_date)
    : new Date();
  const isExpired = expirationDate < currentDate;

  return (
    <Card
      className="relative flex flex-col"
      aria-label={`Deal on ${deal_title}`}
    >
      {short_offer && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs uppercase py-1 px-2">
          {short_offer}
        </div>
      )}

      <div className="flex justify-end pt-2 pr-4">
        <p className="antialiased text-xs text-muted-foreground">
          {formattedDate}
        </p>
      </div>

      <div className="sm:hidden">
        <div className="flex">
          <div className="py-2 pl-4 justify-center">
            <DealImage
              dealTitle={deal_title}
              imageUrl={link_to_image}
              width={147}
              height={92}
            />
          </div>
          <div>
            <ProductDescription
              dealTitle={deal_title}
              isPrice={is_price}
              wasPrice={was_price}
            />
            <PromoCode discountCode={discount_code} />
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="flex-grow">
          <div className="py-2 px-4 flex justify-center">
            <DealImage
              dealTitle={deal_title}
              imageUrl={link_to_image}
              width={525}
              height={336}
            />
          </div>
          <ProductDescription
            dealTitle={deal_title}
            isPrice={is_price}
            wasPrice={was_price}
          />
        </div>
        <PromoCode discountCode={discount_code} />
      </div>

      <div className="flex justify-between items-end px-4 py-4">
        <p className="antialiased text-xs text-gray-600">{seller_name}</p>
        {isExpired ? (
          // Display "Expired" in red when the deal is expired
          <p className="px-2 py-1 bg-[#FFEDEA] text-[#930009] text-xs font-semibold rounded">
            Expired
          </p>
        ) : (
          // Link component with Button for non-expired deals
          <Link
            href={link_to_deal}
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full bg-green-600">
              <ArrowTopRightIcon />
            </Button>
          </Link>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
