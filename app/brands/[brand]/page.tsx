import Container from "@/components/ui/container";
import ProductList from "@/components/ProductList";
import { fetchDeals } from "@/lib/utils";
import { fetchUniqueDealTitles } from "@/lib/utils";

const DEALS_PER_PAGE = 12; // Set the number of deals per page
export const revalidate = 10800; // revalidate the data at most every hour

export const generateStaticParams = async () => {
  const allBrands = await fetchUniqueDealTitles(); // Fetch all unique deal titles

  // Map over allBrands to create the paths array
  const paths = allBrands.map((brand) => {
    const cleanedTitle = brand.title.replace("GiftCard", "").trim();
    return {
      brand: cleanedTitle.replace(/\s/g, "-"),
    };
  });

  return paths;
};

export default async function Page({ params }: { params: { brand: string } }) {
  // Assuming allDeals is your array of deals. Sort them if necessary
  const brandName = params.brand;
  const allDeals = await fetchDeals();

  // Filter deals for the given brand
  const brandDeals = allDeals.filter((deal) =>
    deal.deal_title.toLowerCase().includes(brandName.toLowerCase())
  );

  const pageNumber = 1; // Assuming you're starting with page 1
  const initialDisplayDeals = brandDeals.slice(
    DEALS_PER_PAGE * (pageNumber - 1),
    DEALS_PER_PAGE * pageNumber
  );

  // Calculate pagination details based on filtered deals
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(brandDeals.length / DEALS_PER_PAGE),
  };

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
                <h2 className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your One-Stop Destination for the Best Deals on Gift Cards!
                </h2>
              </div>
            </div>
          </div>
          <div className="gap-y-8">
            <p className="text-black-500 md:text-xl dark:text-gray-400 text-left">
              <span className="border-b-2">Latest Deals</span>
            </p>
          </div>

          <div className="flex flex-col gap-y-8 ">
            <ProductList
              posts={brandDeals}
              initialDisplayPosts={initialDisplayDeals}
              pagination={pagination}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
