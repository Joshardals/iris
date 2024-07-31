"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePathname } from "next/navigation";

interface Props {
  caption?: string;
  header?: string[];
  referredUsers?: any[];
}

export function TableInput({ caption, header, referredUsers }: Props) {
  const pathname = usePathname();
  return (
    <Table className="bg-snow rounded-lg">
      <TableCaption className="text-onyx/50">{caption}</TableCaption>
      <TableHeader className="hover:bg-onyx/10">
        <TableRow>
          {header?.map((data, index) => {
            return (
              <TableHead
                className={`${index === 0 && "w-[100px]"}`}
                key={index}
              >
                {data}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {pathname === "/dashboard/referrals" &&
          referredUsers?.map((user, index) => (
            <TableRow key={index} className="hover:bg-onyx/10">
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.username}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
