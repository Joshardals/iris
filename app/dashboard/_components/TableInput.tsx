"use client";
import { convertAmount, formatDateOnly } from "@/lib/utils";
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
  deposits?: any[];
  withdrawals?: any[];
  referredUsers?: any[];
}

export function TableInput({
  caption,
  header,
  deposits,
  withdrawals,
  referredUsers,
}: Props) {
  const pathname = usePathname();
  const totalDepositAmount = deposits?.reduce(
    (acc, value) => acc + Number(value.amount),
    0
  );

  const totalWithdrawalAmount = withdrawals?.reduce(
    (acc, value) => acc + Number(value.amount),
    0
  );

  return (
    <Table
      className={`bg-snow rounded-lg ${
        pathname === `/dashboard/my-deposits` ||
        pathname === `/dashboard/my-withdrawals`
          ? "max-sm:w-[35rem]"
          : ""
      }`}
    >
      <TableCaption className="text-onyx/50">{caption}</TableCaption>
      <TableHeader className="hover:bg-onyx/10">
        <TableRow>
          {header.map((data, index) => {
            return (
              <TableHead
                key={index}
                className={`font-semibold ${
                  pathname === `/dashboard/my-deposits` ||
                  pathname === `/dashboard/my-withdrawals`
                    ? index === 0
                      ? "w-[100px]"
                      : ""
                    : ""
                } ${data === "Amount" && "text-right"}`}
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

        {/* Table Row for My Deposits */}
        {pathname === `/dashboard/my-deposits` &&
          deposits?.map((deposit, index) => (
            <TableRow key={index} className="hover:bg-onyx/10">
              <TableCell>{index + 1}</TableCell>
              <TableCell>{deposit.status}</TableCell>
              <TableCell>{deposit.method}</TableCell>
              <TableCell className="w-[fit-content]">
                {formatDateOnly(deposit.createdAt)}
              </TableCell>
              <TableCell className="text-right">
                {convertAmount(deposit.amount)}
              </TableCell>
            </TableRow>
          ))}

        {/* Table Row for My Withdrawals */}
        {pathname === `/dashboard/my-withdrawals` &&
          withdrawals?.map((withdraw, index) => (
            <TableRow key={index} className="hover:bg-onyx/10">
              <TableCell>{index + 1}</TableCell>
              <TableCell>{withdraw.status}</TableCell>
              <TableCell>{withdraw.method}</TableCell>
              <TableCell className="w-[fit-content]">
                {formatDateOnly(withdraw.createdAt)}
              </TableCell>
              <TableCell className="text-right">
                {convertAmount(withdraw.amount)}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      {(pathname === "/dashboard/my-deposits" ||
        pathname === "/dashboard/my-withdrawals") && (
        <TableFooter className="bg-onyx/10">
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">
              {pathname === "/dashboard/my-deposits" &&
                convertAmount(totalDepositAmount)}
              {pathname === "/dashboard/my-withdrawals" &&
                convertAmount(totalWithdrawalAmount)}
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
}
