import Container from "@/components/ui/container";
import ProductList from "@/components/ProductList";
import { fetchDeals } from "@/lib/utils";
import { headerFont } from "@/lib/utils";

const DEALS_PER_PAGE = 12; // Set the number of deals per page
export const revalidate = 10800; // revalidate the data at most every hour

async function fetchDealsData() {
  // Fetching and sorting deals
  const allDeals = await fetchDeals();
  return allDeals;
}

// This function gets called at build time

export const generateStaticParams = async () => {
  const allDeals = await fetchDealsData(); // Ensure you have the deals data before proceeding
  const totalPages = Math.ceil(allDeals.length / DEALS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return paths;
};

export default async function Page({ params }: { params: { page: string } }) {
  // Assuming allDeals is your array of deals. Sort them if necessary
  const sortedDeals = await fetchDeals(); // Replace with sortDeals(allDeals) if you have a sorting function
  const pageNumber = parseInt(params.page as string); // Set the current page number. This might come from router query in a real scenario

  // Calculate the subset of deals to be displayed on the current page
  const initialDisplayDeals = sortedDeals.slice(
    DEALS_PER_PAGE * (pageNumber - 1),
    DEALS_PER_PAGE * pageNumber
  );

  // Calculate pagination details
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(sortedDeals.length / DEALS_PER_PAGE),
  };
  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <div className="container px-4 md:px-6 mt-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className={headerFont.className}>
                    GiftCard<span className="text-primary">Deals</span>
                  </span>
                </h1>
                <h2 className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  <span className={headerFont.className}>
                    Your One-Stop Destination for the Best Deals on Gift Cards!
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="gap-y-8">
            <p className="text-black md:text-xl dark:text-gray-400 text-left">
              <span className={`border-b-2 ${headerFont.className}`}>
                Latest Deals
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-y-8 ">
            <ProductList
              posts={sortedDeals}
              initialDisplayPosts={initialDisplayDeals}
              pagination={pagination}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
