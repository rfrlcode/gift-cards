import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

// Define the Deal document type
export const Deal = defineDocumentType(() => ({
  name: "Deal",
  filePathPattern: `deals/**/*.mdx`, // You can change this pattern as needed
  contentType: "mdx",
  fields: {
    id: {
      type: "number",
      required: true, // Set to true if id is mandatory
    },
    deal_title: {
      type: "string",
      required: true,
    },
    is_price: {
      type: "string",
      required: true,
    },
    was_price: {
      type: "string",
    },
    discount_code: {
      type: "string",
    },
    seller_name: {
      type: "string",
    },
    link_to_deal: {
      type: "string",
      required: true,
    },
    createdAt: {
      type: "date",
    },
    short_offer: {
      type: "string",
    },
    image: {
      type: "string",
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Page, Deal],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
