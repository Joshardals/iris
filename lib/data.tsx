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
  },
  {
    plan: "advanced trade",
    amount: "$700 - $1499",
    term: "5",
    percentage: "7",
  },
  {
    plan: "professional",
    amount: "$1500 - $3999",
    term: "5",
    percentage: "12",
  },
  {
    plan: "promo",
    amount: "$4000 - $8999",
    term: "5",
    percentage: "15",
  },
  {
    plan: "master trade",
    amount: "$9000 - $15000",
    term: "5", 
    percentage: "18",
  },
  {
    plan: "retirement",
    amount: "$15000 - $Unlimited",
    term: "5",
    percentage: "30",
  },
];

export const method = [
  { method: "usdt" },
  { method: "bitcoin" },
  { method: "ethereum" },
  { method: "litecoin" },
  { method: "doge" },
  { method: "tron" },
  { method: "bnb" },
  { method: "shiba" },
];
