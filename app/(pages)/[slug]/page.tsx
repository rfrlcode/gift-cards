import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";
import { DocsPageHeader } from "@/components/page-header";
import { Mdx } from "@/components/mdx-components";

interface DocPageProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allPages.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    notFound();
  }

  return doc;
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params.slug);

  return (
    <main className="bg-gray-50">
      <div className="bg-white py-20 sm:py-40">
        <DocsPageHeader heading={doc.title} />
      </div>
      <div className="mx-auto w-full lg:px-20 flex max-w-screen-md flex-col items-center p-10 sm:pt-20">
        <Mdx code={doc.body.code} />
      </div>
      <div className="mt-5 w-full pt-5 text-center"></div>
    </main>
  );
}
