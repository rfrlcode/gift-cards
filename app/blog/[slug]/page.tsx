import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { DocsPageHeader } from "@/components/page-header";
import { Mdx } from "@/components/mdx-components";
import type { Metadata } from "next";
import Container from "@/components/ui/container";

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
    <main className="bg-background">
      <Container>
        <div className="bg-card pt-10 sm:pt-10">
          <DocsPageHeader heading={doc.title} />
        </div>
        <div className="mx-auto w-full lg:px-20 flex max-w-screen-lg flex-col items-center p-8 sm:pt-20">
          <Mdx code={doc.body.code} />
        </div>
        <div className="mt-5 w-full pt-5 text-center"></div>
      </Container>
    </main>
  );
}
