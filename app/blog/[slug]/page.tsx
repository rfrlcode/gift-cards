import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { DocsPageHeader } from "@/components/page-header";
import { Mdx } from "@/components/mdx-components";
import type { Metadata } from "next";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/Tag";

interface DocPageProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allBlogs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    notFound();
  }

  return doc;
}

async function generateMetadata(slug: string): Promise<Metadata> {
  const doc = await getDocFromParams(slug);

  if (!doc) {
    return { title: "", description: "" };
  }

  return {
    title: doc.title || "",
  };
}

export async function generateStaticParams() {
  return allBlogs.map((doc) => ({
    slug: doc.slugAsParams,
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params.slug);

  // Assuming the metadata is set elsewhere in the framework using the generateMetadata function
  return (
    <Container>
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={doc.date}>
                      {new Date(doc.date).toLocaleDateString("en-CA")}
                    </time>
                  </dd>
                </div>
              </dl>
              <div className="bg-card">
                <DocsPageHeader heading={doc.title} />
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  <li className="flex items-center space-x-2">
                    <Image
                      src="https://media.licdn.com/dms/image/C5603AQGUX6HF8Cdhuw/profile-displayphoto-shrink_800_800/0/1571118386704?e=1710374400&v=beta&t=cD29uB8pmR4a3hLXokwrHtGUgkDSblejRBrevBCNiC8"
                      width={38}
                      height={38}
                      alt="avatar"
                      className="h-10 w-10 rounded-full"
                    />

                    <dl className="whitespace-nowrap text-sm font-medium leading-5">
                      <dt className="sr-only">Name</dt>
                      <Link
                        href="https://www.ritanshudokania.xyz/"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        Ritanshu Dokania
                      </Link>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert md:pr-20">
                <Mdx code={doc.body.code} />
              </div>
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {doc.tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {doc.tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/blog`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="Back to the blog"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </Container>
  );
}
