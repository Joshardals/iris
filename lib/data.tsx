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
    href: "/dasboard/my-deposits",
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
