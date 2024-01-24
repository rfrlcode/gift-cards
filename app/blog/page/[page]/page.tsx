import Container from "@/components/ui/container";
import { allBlogs } from "contentlayer/generated";
import BlogList from "@/components/BlogList";
import { Blog } from "contentlayer/generated";
import { headerFont } from "@/lib/utils";

const POSTS_PER_PAGE = 5;
export const revalidate = 10800;

const sortPostsByDate = (posts: Blog[]): Blog[] => {
  return posts.sort(
    (a: Blog, b: Blog) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const generateStaticParams = () => {
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return paths;
};

export default function Page({ params }: { params: { page: string } }) {
  // Assuming allDeals is your array of deals. Sort them if necessary
  const sortedPosts = sortPostsByDate(allBlogs); // Replace with sortDeals(allDeals) if you have a sorting function
  const pageNumber = parseInt(params.page as string); // Set the current page number. This might come from router query in a real scenario

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
                <h1
                  className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl`}
                >
                  <span className={headerFont.className}>
                    GiftCard<span className="text-primary">Deals</span>
                  </span>
                </h1>
                <h2
                  className={`mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 ${headerFont.className}`}
                >
                  Your One-Stop Destination for the Best Deals on Gift Cards!
                </h2>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="text-black-500 md:text-xl dark:text-gray-400 text-left">
              <span className={`border-b-2 `}>Blog Posts</span>
            </h3>
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
