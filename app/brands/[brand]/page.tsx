import Image from "next/image";
import { columns } from "@/components/tasks/components/columns";
import { DataTable } from "@/components/tasks/components/data-table";
import Container from "@/components/ui/container";
import { fetchDeals } from "@/lib/utils";
import { fetchUniqueDealTitles } from "@/lib/utils";

export const revalidate = 10800; // revalidate the data at most every hour

export const generateStaticParams = async () => {
  const allBrands = await fetchUniqueDealTitles(); // Fetch all unique deal titles
  return allBrands.map((brand) => ({ brand: brand.brandName }));
};

export default async function Page({ params }: { params: { brand: string } }) {
  const { brand: brandName } = params;
  const allDeals = await fetchDeals();

  const brandDeals = allDeals.filter(
    (deal) => deal !== null && deal.brand_name.includes(brandName)
  );

  // Get the image from the first deal, if available
  const firstDealImage =
    brandDeals.length > 0 && brandDeals[0] !== null
      ? brandDeals[0]?.link_to_image
      : "/public/logo.svg";

  const brandTitle =
    brandDeals.length > 0 && brandDeals[0] !== null
      ? brandDeals[0].deal_title.replace("GiftCard", "").trim()
      : "Test";

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="mt-10">
          <div className="flex flex-col space-y-5">
            <Image
              src={firstDealImage}
              alt={`Image of ${brandTitle} gift card`}
              width={200}
              height={200}
              className="rounded-lg border-2"
            />
            <div className="flex flex-col space-y-4 justify-start items-start">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  {brandTitle}
                </h1>
                <h2 className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Find the best deals on {brandTitle} gift-cards!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex-1 flex-col space-y-2 md:flex">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Latest Deals</h2>
          </div>
        </div>
        <div className="max-w-xl">
          <DataTable data={brandDeals} columns={columns} />
        </div>
      </div>
    </Container>
  );
}
