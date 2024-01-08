"use client";

import ProductCard from "@/components/ui/ProductCard";
import Pagination from "@/components/pagination";
import React from "react";
import { PaginationProps } from "@/components/pagination";

interface ProductListProps {
  posts: any[]; // Adjust the type according to your data structure
  initialDisplayPosts?: any[];
  pagination?: PaginationProps;
}

export default function ProductList({
  posts,
  initialDisplayPosts = [],
  pagination,
}: ProductListProps) {
  const displayPosts =
    initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayPosts.map((deal, index) => (
          <div key={index} className="flex-1">
            <ProductCard data={deal} />
          </div>
        ))}
      </div>
      {pagination && pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </div>
  );
}
