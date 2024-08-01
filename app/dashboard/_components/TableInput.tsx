"use client";
import { convertAmount } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePathname } from "next/navigation";

interface Props {
  caption: string;
  header: string[];
  referredUsers?: any[];
}

export function TableInput({ caption, header, referredUsers }: Props) {
  const pathname = usePathname();
  // const totalAmount = depositInfo?.reduce(
  //   (acc, value) => acc + Number(value.amount),
  //   0
  // );

  return (
    <Table className="bg-snow rounded-lg">
      <TableCaption className="text-onyx/50">{caption}</TableCaption>
      <TableHeader className="hover:bg-onyx/10">
        <TableRow>
          {header.map((data, index) => {
            return (
              <TableHead
                key={index}
                className={`${
                  pathname === `/dashboard/my-deposits` ||
                  pathname === `/dashboard/my-withdrawals`
                    ? index === 0
                      ? "w-[100px]"
                      : ""
                    : ""
                }`}
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
              <TableCell>{user.username}</TableCell>
            </TableRow>
          ))}
      </TableBody>
      {(pathname === "/dashboard/my-deposits" ||
        pathname === "/dashboard/my-withdrawals") && (
        <TableFooter className="bg-onyx/10">
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="">
              {/* {totalAmount?.toLocaleString("en-US", {
               style: "currency",
               currency: "USD",
             })} */}
              {convertAmount(0)}
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
}
