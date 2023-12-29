import ProductCard from "@/components/ui/ProductCard";
import { Deal } from "@/types/index";
import prisma from "@/lib/prisma";
import { PageProps } from "@/app/page";
import { Pagination } from "./pagination";
import { revalidatePath } from "next/cache";

export type FetchDealsType = typeof fetchDeals;
const PAGE_SIZE = 12;

const fetchDeals = async ({ take = PAGE_SIZE, skip = 0 }) => {
  "use server";

  const results = await prisma.deal.findMany({
    take,
    skip,
    orderBy: {
      createdAt: "desc",
    },
  });

  const total = await prisma.deal.count();

  revalidatePath("/");

  return {
    data: results,
    metadata: {
      hasNextPage: skip + take < total,
      totalPages: Math.ceil(total / take),
    },
  };
};

export const ProductList = async (props: PageProps) => {
  const pageNumber = Number(props?.searchParams?.page || 1); // Get the page number. Default to 1 if not provided.
  const take = PAGE_SIZE;
  const skip = (pageNumber - 1) * take; // Calculate skip based on page number.

  const { data, metadata } = await fetchDeals({ take, skip });

  // if (pageNumber < 1 || pageNumber > metadata.totalPages) {
  //   throw new Error("InvalidPageNumber");
  // }

  return (
    <div className="">
      {/* Flex container with wrap and gap for spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((deal, i) => (
          <div key={i} className="flex-1">
            <ProductCard data={deal} />
          </div>
        ))}
      </div>
      <Pagination {...props.searchParams} {...metadata} />
    </div>
  );
};
