import Container from "@/components/ui/container";
import { allBlogs } from "contentlayer/generated";
import BlogList from "@/components/BlogList";

const POSTS_PER_PAGE = 5; // Set the number of deals per page

export default function BlogHomePage() {
  // Assuming allDeals is your array of deals. Sort them if necessary
  const sortedPosts = allBlogs; // Replace with sortDeals(allDeals) if you have a sorting function
  const pageNumber = 1; // Set the current page number. This might come from router query in a real scenario

  // Calculate the subset of deals to be displayed on the current page
  const initialDisplayDeals = sortedPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );

  // Calculate pagination details
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(sortedPosts.length / POSTS_PER_PAGE),
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
              <span className="border-b-2">Blog Posts</span>
            </p>
          </div>

          <div className="flex flex-col gap-y-8 ">
            <BlogList
              posts={sortedPosts}
              initialDisplayPosts={initialDisplayDeals}
              pagination={pagination}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
