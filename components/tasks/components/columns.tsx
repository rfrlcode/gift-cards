"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Deal } from "@/types/index";
import { DataTableColumnHeader } from "./data-table-column-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export const columns: ColumnDef<Deal>[] = [
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Date Added"
        className="w-[80px]"
      />
    ),
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt") as Date;
      // Convert the Date object to a string
      const dateString = createdAt ? createdAt.toLocaleDateString() : "N/A";
      return <div className="w-[80px]">{dateString}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "deal_title",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Deal Details"
        className="w-[150px]"
      />
    ),
    cell: ({ row }) => {
      // Extract the required deal properties
      // const dealTitle = row.original.deal_title;
      const isPrice = row.original.is_price;
      const wasPrice = row.original.was_price;
      const discountCode = row.original.discount_code;

      return (
        <div className="w-[150px]">
          <p className="antialiased text-green-600 font-semibold text-lg">
            {isPrice}
          </p>
          <p className="antialiased text-slate-400 font-semibold text-sm">
            {wasPrice}
          </p>
          {discountCode && (
            <div className="flex flex-col items-start">
              <p className="text-xs font-semibold dark:text-gray-300">
                Use code at checkout:
              </p>
              <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded px-4 py-1">
                <p className="text-xs select-all dark:text-white">
                  {discountCode}
                </p>
              </div>
            </div>
          )}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "seller_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Seller" className="" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("seller_name")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "link_to_deal",
    header: ({ column }) => <DataTableColumnHeader column={column} title="" />,
    cell: ({ row }) => (
      <div className="">
        <Link
          href={row.getValue("link_to_deal")}
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <span className="md:inline hidden">Grab Deal</span>
            <span className="md:hidden">
              <ArrowTopRightIcon />
            </span>
          </Button>
        </Link>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
