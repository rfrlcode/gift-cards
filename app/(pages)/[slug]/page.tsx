import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";
import { DocsPageHeader } from "@/components/page-header";
import { Mdx } from "@/components/mdx-components";
import type { Metadata } from "next";

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

async function generateMetadata(slug: string): Promise<Metadata> {
  const doc = await getDocFromParams(slug);

  if (!doc) {
    return { title: "", description: "" };
  }

  return {
    title: doc.title || "",
    description: doc.description || "Default description here",
  };
}

export async function generateStaticParams() {
  return allPages.map((doc) => ({
    params: { slug: doc.slugAsParams },
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams(params.slug);

  // Assuming the metadata is set elsewhere in the framework using the generateMetadata function
  return (
    <main className="bg-background">
      <div className="bg-card py-20 sm:py-40">
        <DocsPageHeader heading={doc.title} />
      </div>
      <div className="mx-auto w-full lg:px-20 flex max-w-screen-md flex-col items-center p-8 sm:pt-20">
        <Mdx code={doc.body.code} />
      </div>
      <div className="mt-5 w-full pt-5 text-center"></div>
    </main>
  );
}
