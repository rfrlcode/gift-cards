"use client";

import Pagination from "@/components/pagination";
import React from "react";
import { PaginationProps } from "@/components/pagination";
import Link from "next/link";
import Tag from "@/components/Tag";

interface ProductListProps {
  posts: any[]; // Adjust the type according to your data structure
  initialDisplayPosts?: any[];
  pagination?: PaginationProps;
}

export default function BlogList({
  posts,
  initialDisplayPosts = [],
  pagination,
}: ProductListProps) {
  const displayPosts =
    initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;

  // Determine the base URL based on the environment
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://giftcarddeals.xyz";

  return (
    <div className="flex sm:space-x-24">
      <div className="flex flex-col items-center justify-center w-full">
        <ul className="w-full">
          {displayPosts.map((post) => {
            const href = `${baseUrl}${post.slug}`;
            return (
              <li key={post.title} className="py-5">
                <article className="flex flex-col space-y-2 xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-CA")}
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-3">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          href={href}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <div className="flex flex-wrap">
                        {post.tags?.map((tag: string) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {post.summary}
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={href}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "${post.title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        {pagination && pagination.totalPages > 1 && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
          />
        )}
      </div>
    </div>
  );
}
