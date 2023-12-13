import { ChevronDownIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Card1() {
  return (
    <Card className="flex flex-row flex-none max-w-md justify-between space-x-0">
      <Image
        src="/image.webp"
        width={200}
        height={200}
        alt="image"
        className="rounded-lg"
      />
      <div className="flex flex-col justify-between ml-0">
        <CardHeader>
          <CardTitle>25$ GrubHub GiftCard</CardTitle>
          <CardDescription>10% off from Amazon</CardDescription>
        </CardHeader>
        <CardFooter className="justify-end items-end">
          <Button>Grab Deal</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
