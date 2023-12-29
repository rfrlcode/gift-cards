import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type PaginationProps = {
  page?: string;
  totalPages: number;
  hasNextPage: boolean;
};

export const Pagination = (props: PaginationProps) => {
  const { page = 1, totalPages, hasNextPage } = props;

  const currentPage = Math.min(Math.max(Number(page), 1), totalPages);

  const getPagesToShow = () => {
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(currentPage + 2, totalPages);

    // Adjust for cases where totalPages is less than 5
    if (totalPages < 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      // Adjust start and end page if they are near the beginning or end
      if (currentPage <= 3) {
        endPage = 5;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 4;
      }
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const pages = getPagesToShow();

  return (
    <div
      className="flex items-center justify-center space-x-6 mt-10"
      style={{ color: "var(--foreground)" }}
    >
      <Link
        className={cn(
          "rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-secondary",
          currentPage === 1 ? "pointer-events-none bg-muted" : ""
        )}
        href={`?page=${currentPage - 1}`}
      >
        Previous
      </Link>

      <nav
        aria-label="Pagination"
        className="relative z-0 inline-flex -space-x-px rounded-md"
      >
        {pages.map((p, i) => (
          <Link
            key={p}
            className={cn(
              "relative inline-flex items-center border border-border px-4 py-2 text-sm font-medium hover:bg-secondary",
              p === currentPage ? "pointer-events-none bg-muted" : "",
              i === 0 ? "rounded-l-md" : "",
              i === pages.length - 1 ? "rounded-r-md" : ""
            )}
            href={`?page=${p}`}
          >
            {p}
          </Link>
        ))}
      </nav>

      <Link
        className={cn(
          "rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-secondary",
          !hasNextPage ? "pointer-events-none bg-muted" : ""
        )}
        href={`?page=${currentPage + 1}`}
      >
        Next
      </Link>
    </div>
  );
};
