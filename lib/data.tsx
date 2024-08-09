// Dashboard Sidebar Links
import { VscAccount } from "react-icons/vsc";
import {
  RiHistoryFill,
  RiLuggageDepositLine,
  RiSettings2Line,
} from "react-icons/ri";
import { TbTransferIn, TbTransferOut } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";

export const sidebarlinks = [
  {
    label: "Your Account",
    href: "/dashboard",
    icon: <VscAccount />,
  },
  {
    label: "Invest",
    href: "/dashboard/invest",
    icon: <TbTransferIn />,
  },
  {
    label: "My Deposits",
    href: "/dashboard/my-deposits",
    icon: <RiHistoryFill />,
  },
  {
    label: "Withdraw",
    href: "/dashboard/withdraw",
    icon: <TbTransferOut />,
  },
  {
    label: "My Withdrawals",
    href: "/dashboard/my-withdrawals",
    icon: <RiHistoryFill />,
  },
  {
    label: "Referrals",
    href: "/dashboard/referrals",
    icon: <FaPeopleGroup />,
  },
  {
    label: "Edit Account",
    href: "/dashboard/edit-account",
    icon: <RiSettings2Line />,
  },
];

export const plan = [
  {
    plan: "beginners",
    amount: "$100 - $699",
    term: "5",
    percentage: "5",
    referralCommision: "2",
    minAmount: 100,
  },
  {
    plan: "advanced trade",
    amount: "$700 - $1,499",
    term: "5",
    percentage: "7",
    referralCommision: "3",
    minAmount: 700,
  },
  {
    plan: "professional",
    amount: "$1,500 - $3,999",
    term: "5",
    percentage: "12",
    referralCommision: "4",
    minAmount: 1500,
  },
  {
    plan: "promo",
    amount: "$4,000 - $8,999",
    term: "5",
    percentage: "15",
    referralCommision: "5",
    minAmount: 4000,
  },
  {
    plan: "master trade",
    amount: "$9,000 - $15,000",
    term: "5",
    percentage: "18",
    referralCommision: "6",
    minAmount: 9000,
  },
  {
    plan: "retirement",
    amount: "$15,000 - $Unlimited",
    term: "5",
    percentage: "30",
    referralCommision: "6",
    minAmount: 15000,
  },
];

export const method = [
  { method: "bitcoin" },
  { method: "ethereum" },
  { method: "doge" },
  { method: "litecoin" },
  { method: "tron" },
  { method: "shiba" },
  // { method: "bnb" },
  { method: "usdt" },
];
