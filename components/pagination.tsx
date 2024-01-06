import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const pathname = usePathname();
  // Remove leading and trailing slashes, then split
  const pathSegments = pathname.replace(/^\/|\/$/g, "").split("/");
  const basePath = pathSegments[0] === "page" ? "" : `/${pathSegments[0]}`;

  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  const getHref = (page: number) => {
    // Check if we are at the root ('/')
    if (pathname === "/") {
      return page === 1 ? "/" : `/page/${page}`;
    } else {
      return page === 1 ? `${basePath}/` : `${basePath}/page/${page}`;
    }
  };

  // Calculate pages to show
  let startPage = Math.max(currentPage - 2, 1);
  let endPage = Math.min(currentPage + 2, totalPages);
  if (totalPages < 5) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 3) {
      endPage = 5;
    } else if (currentPage >= totalPages - 2) {
      startPage = totalPages - 4;
    }
  }
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div
      className="flex items-center justify-center md:space-x-6 mt-10 space-x-3"
      style={{ color: "var(--foreground)" }}
    >
      <Link
        className={cn(
          "rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-secondary",
          currentPage === 1 ? "pointer-events-none bg-muted" : ""
        )}
        href={getHref(currentPage - 1)}
      >
        Previous
      </Link>

      <nav
        aria-label="Pagination"
        className="relative z-0 inline-flex -space-x-px rounded-md"
      >
        {pages.map((p) => (
          <Link
            key={p}
            className={cn(
              "relative inline-flex items-center border border-border px-4 py-2 text-sm font-medium hover:bg-secondary",
              p === currentPage ? "pointer-events-none bg-muted" : "",
              p === startPage ? "rounded-l-md" : "",
              p === endPage ? "rounded-r-md" : ""
            )}
            href={getHref(p)}
          >
            {p}
          </Link>
        ))}
      </nav>

      <Link
        className={cn(
          "rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-secondary",
          currentPage >= totalPages ? "pointer-events-none bg-muted" : ""
        )}
        href={getHref(currentPage + 1)}
      >
        Next
      </Link>
    </div>
  );
}
