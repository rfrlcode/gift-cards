import Container from "@/components/ui/container";
import { ProductList } from "@/components/ProductList";

export type PageProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function CardsPage(props: PageProps) {
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
          <div className="gap-y-8 px-4 sm:px-6 lg:px-8">
            <p className="text-black-500 md:text-xl dark:text-gray-400 text-left">
              <span className="border-b-2">Latest Deals</span>
            </p>
          </div>

          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList {...props} />
          </div>
        </div>
      </Container>
    </div>
  );
}
